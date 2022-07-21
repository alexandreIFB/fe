import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.localHostHttpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories() {
    return this.localHostHttpClient.get('/categories');
  }
}

export default new CategoriesService();
