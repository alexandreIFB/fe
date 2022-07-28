import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../service/ContactsService';
import { addToast } from '../../utils/addToast';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactsService.createContact(contact);

      addToast({
        type: 'sucess',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch {
      addToast({
        type: 'error',
        text: 'Ocorreu um erro ao cadastrar contato!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
