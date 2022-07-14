/* eslint-disable no-useless-constructor */
export default class APIError extends Error {
  constructor(message, response) {
    super();

    this.name = 'APIError';
    this.message = message;
    this.response = response;
  }
}
