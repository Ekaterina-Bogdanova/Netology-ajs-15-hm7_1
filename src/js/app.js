export default class Validator {
  constructor (userName) {
    this.userName = userName;  
  }

  validateUsername() {
    return (!/[^-\w]/.test(this.userName) && /^[^-_\d].+[^-_\d]$/.test(this.userName) && !/\d{4,}/.test(this.userName));
  }
}

const person = new Validator('Ralf0099p');
person.validateUsername();


