import APIError from '../../erros/APIErros';
import delay from '../../utils/delay';

class HttpCliente {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach((entry) => {
        const [name, value] = entry;
        headers.append(name, value);
      });
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    const contentType = response.headers.get('content-type');

    if (!contentType.includes('application/json')) {
      throw new APIError(`${response.status} - ${response.statusText} - and Content-Type != application/json`, response);
    }

    const responseBody = await response.json();

    if (!response.ok) {
      throw new APIError(`${response.status} - ${responseBody.error}`, response);
    }

    return responseBody;
  }

  get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }
}

export default HttpCliente;
