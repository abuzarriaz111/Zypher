
import './App.css';


import Routee from './Components/Routers';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './Components/Stripe';

// const stripePromise = loadStripe('pk_test_51HxmROCmTw5RHoXG8HKf8jNdtYJsQw5E1AlY22M325hFy8YkcGxBhuvlz0jF3oWyu3sVXpjOVcVJotmjXekYo9jA00EPrtjitS');



function App() {
  
  return (
   <>

  <Routee/>
{/*  
  < Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements> */}
 
   </>
 
  );
}

export default App;
