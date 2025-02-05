import { Button } from "@/components/ui/button";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { FormEvent, useState } from "react"

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [errorMessage,setErrorMessage] =useState<string |null |undefined>(null)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (elements == null) {
            return;
        }
        
        const { error: submitError } = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message)
            return;
        }
        // const res = await fetch('/create-intent', { method: 'POST' })
        // const { client_secret: clientSecret } = await res.json()
        
        const { client_secret: clientSecret }: any = 'sk_test_dummy_client_secret_for_testing';
        if (!clientSecret) {
            throw new Error('clientSecret is missing');
        }
        const { error } : any= await stripe?.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url:"http://localhost:5173//userDashboard/payment/payment-success"
            }
        })
        if (error) {
            setErrorMessage(error.message)
        } else {
            console.log('payment successfully')
            console.log(elements)
        }
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <PaymentElement />
              <div className="pb-10 pt-5 text-center" >    
              <Button variant="outline" className="w-full"  type="submit" disabled={!stripe || !elements}>Pay</Button>
              </div>
              {errorMessage && <div>{errorMessage}</div>}
          </form>
    </div>
  )
}
