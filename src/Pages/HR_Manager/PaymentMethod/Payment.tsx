import {loadStripe, StripeElementsOptionsMode} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CheckoutForm } from "./CheckoutForm"


const stripePromise = loadStripe(import.meta.env.VITE_Payment_apikey)

export const Payment = () => {

const options :StripeElementsOptionsMode = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};
  return (
    <div className="my-10 container mx-auto bg-[#F4F8FD]">
      <div>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
