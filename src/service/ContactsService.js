import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.localHostHttpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.localHostHttpClient.get(`/contacts?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
