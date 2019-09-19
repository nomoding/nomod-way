import React, { Component } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class SubscriptionForm extends Component {
  state = {
    error: false,
    errorMessage: '',
    success: false,
    inputValue: ''
  };

  handleInvalidInput = event => {
    event.preventDefault();

    const { inputValue } = this.state;
    let errorMessage;

    if (!inputValue) {
      errorMessage = 'Please type your email address';
    } else {
      errorMessage = 'Please use a valid email address';
    }

    this.setState({ error: true, errorMessage, success: false });
  };

  handleChangeInput = event => {
    const { value } = event.target;

    this.setState({ inputValue: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    this.setState({ error: false });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'nomod-way',
        email: this.state.inputValue
      })
    })
      .then(response => {
        if (response.ok) {
          this.setState({ success: true, inputValue: '' });
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    const { inputValue, error, errorMessage, success } = this.state;
    return (
      <form
        method="POST"
        action="/"
        name="nomod-way"
        data-netlify="true"
        className="subscription-form"
        onSubmit={this.handleSubmitForm}
      >
        <div className="input-and-btn">
          <input type="hidden" name="form-name" value="nomod-way" />
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            className={error ? 'error' : ''}
            required
            value={inputValue}
            onChange={this.handleChangeInput}
            onInvalid={e => this.handleInvalidInput(e)}
            id="subscription-email"
            aria-label="email"
          />
          <button type="submit">JOIN WAITLIST</button>
        </div>

        {success && (
          <div className="success-message">
            Thank you for subscribing! We’ll let you know when we go live!
          </div>
        )}

        {error && <div className="error-message">{errorMessage}</div>}
      </form>
    );
  }
}

export default SubscriptionForm;
