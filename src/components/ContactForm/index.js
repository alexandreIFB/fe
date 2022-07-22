import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import FormGroup from '../FormGroup';

import { Form } from './styles';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';
import CategoriesService from '../../service/CategoriesService';

function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadCategories, setIsLoadCategories] = useState(true);

  const {
    getErrorMessageByFieldName, setError, removeError, errors,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch { } finally {
        setIsLoadCategories(false);
      }
    }

    loadCategories();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatorio' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email invalido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    return setPhone(formatPhone(event.target.value));
  }

  function handleCategoryChange(event) {
    return setCategoryId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      name, email, phone, categoryId,
    });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup
        error={getErrorMessageByFieldName('name')}
      >
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup
        error={getErrorMessageByFieldName('email')}
      >
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>
      <FormGroup isLoading={isLoadCategories}>
        <Select
          value={categoryId}
          onChange={handleCategoryChange}
          disabled={isLoadCategories}
        >
          <option value="">Sem Categoria</option>
          {
            categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))
          }
        </Select>
      </FormGroup>
      <Button type="submit" disabled={!isFormValid}>{buttonLabel}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
