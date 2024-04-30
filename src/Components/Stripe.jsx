import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, token } = await stripe.createToken(cardElement);

      if (error) {
        throw new Error(error.message);
      }

      // Use the token to make a charge or save it for later
      console.log('Token:', token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='card  ' style={{ width: '500px' }}>
      <CardElement />
      </div>
    
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CheckoutForm;
