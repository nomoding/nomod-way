import React from 'react';

const SubscriptionForm = () => (
  <form className="subscription-form">
    <div className="input-and-btn">
      <input type="email" name="email" placeholder="Type your email" required />
      <button type="submit">JOIN WAITLIST</button>
    </div>

    {false && (
      <div className="success-message">
        Thank you for subscribing! We’ll let you know when we go live!
      </div>
    )}
  </form>
);

export default SubscriptionForm;
