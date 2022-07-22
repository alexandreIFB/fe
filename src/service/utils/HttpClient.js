import APIError from '../../erros/APIErros';
import delay from '../../utils/delay';

class HttpCliente {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(1500);

    const response = await fetch(`${this.baseUrl}${path}`);

    const contentType = response.headers.get('content-type');

    if (!contentType.includes('application/json')) {
      throw new APIError(`${response.status} - ${response.statusText} - and Content-Type != application/json`, response);
    }

    const body = await response.json();

    if (!response.ok) {
      throw new APIError(`${response.status} - ${body.error}`, response);
    }

    return body;
  }

  async post(path, body) {
    await delay(1500);

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
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
}

export default HttpCliente;
