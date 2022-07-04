import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import { Form } from './styles';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="1">Instagram</option>
          <option value="1">Instagram</option>
          <option value="1">Instagram</option>
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
