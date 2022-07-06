import PropTypes from 'prop-types';
import { useState } from 'react';
import FormGroup from '../FormGroup';

import { Form } from './styles';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [erros, setErros] = useState([]);

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

  console.log(erros);

  function handleEmailChange(event) {
    return setEmail(event.target.value);
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

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <FormGroup
        error={erros.find((error) => error.field === 'name')?.message}
      >
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={erros.some((error) => error.field === 'name')}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
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
