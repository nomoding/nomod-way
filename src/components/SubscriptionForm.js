import React, { Component } from 'react';

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

    setTimeout(() => {
      console.log('Request');
      this.setState({ success: true, inputValue: '' });
    }, 500);
  };

  render() {
    const { inputValue, error, errorMessage, success } = this.state;
    return (
      <form className="subscription-form" onSubmit={this.handleSubmitForm}>
        <div className="input-and-btn">
          <input
            type="email"
            name="email"
            placeholder="Type your email"
            className={error ? 'error' : ''}
            required
            value={inputValue}
            onChange={this.handleChangeInput}
            onInvalid={e => this.handleInvalidInput(e)}
            aria-label="Subscription Email"
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
