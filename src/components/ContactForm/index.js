import PropTypes from 'prop-types';
import { useState } from 'react';
import FormGroup from '../FormGroup';

import { Form } from './styles';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import isEmailValid from '../../utils/isEmailValid';

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [erros, setErros] = useState([]);

  console.log(erros);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErros((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatorio' },
      ]);
    } else {
      setErros((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExist = erros.some((error) => error.field === 'email');

      if (!errorAlreadyExist) {
        setErros((prevState) => [
          ...prevState,
          { field: 'email', message: 'Email invalido' },
        ]);
      }
    } else {
      setErros((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  }

  function handlePhoneChange(event) {
    return setPhone(event.target.value);
  }

  function handleCategoryChange(event) {
    return setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  function getErrorMessageByFieldName(fieldName) {
    return erros.find((error) => error.field === fieldName)?.message;
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <FormGroup
        error={getErrorMessageByFieldName('name')}
      >
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup
        error={getErrorMessageByFieldName('email')}
      >
        <Input
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Categoria</option>
          <option value="INSTAGRAM">Instagram</option>
          <option value="1">Discord</option>
        </Select>
      </FormGroup>
      <Button type="submit">{buttonLabel}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default ContactForm;
