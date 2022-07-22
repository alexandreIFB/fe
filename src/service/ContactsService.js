import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.localHostHttpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.localHostHttpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.localHostHttpClient.post('/contacts', contact);
  }
}

export default new ContactsService();
