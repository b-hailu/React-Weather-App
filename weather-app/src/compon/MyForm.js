import React, { Component } from 'react';
import Form from '../../src/MyForm.css';

const inputParsers = {
  data(input) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

export default class MyForm extends Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()){
      const input = form.elements[name];
      const parserName = input.dataset.parse;
      if (parserName) {
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
      }
    }

    //Access formData fields with data.get(fieldName)
    const [month, day, year] = data.get('birthdate').split('/');
    const serverDate = `${year}-${month}-${day}`;

    data.set('birthdate', serverDate);
    data.set('username', data.get('username').toUpperCase());


  fetch('/api/form-submit-url', {
    method: 'POST',
    body: data,
  });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="username">Username:</label>
        <input
        id="username"
        name="username"
        type="text" required
        data-parse="uppercase"
        />

        <label htmlFor="email">Email:</label>
        <input
        id="email"
        name="email"
        type="email" required
        />

        <label htmlfor="birthdate">Birthdate:</label>
        <input
        id="birthdate"
        name="birthdate"
        type="text" required
        data-parse="data"
        placeholder="MM/DD/YYYY"
        pattern="\d{2}\/\d{2}/\d{4}"
        required
        />

        <button>Send data!</button>
      </form>
    )
  }
}
