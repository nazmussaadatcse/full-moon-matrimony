import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";



const Checkout = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
    const id = useParams();
    const ids =id.id;



    return (
        <div>
            <h2>payment for {ids}</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={ids}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Checkout;