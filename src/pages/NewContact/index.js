import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import { Select } from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input placeholder="Nome" />
      <Input placeholder="E-mail" />
      <Input placeholder="Telefone" />

      <Select placeholder="Categoria">
        <option value="1">Instagram</option>
        <option value="2">Linkedin</option>
      </Select>

      <Button type="button">Salvar Alterações</Button>
      <Button type="button" disabled>Salvar Alterações</Button>
    </>
  );
}
