import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import useUsers from "../hooks/useUsers";


const CheckoutForm = ({ id }) => {


    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure();
    // const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
    const refUserId = id;
    const [users] = useUsers();

    const myData = users.find(me => me.email === user?.email);
    const reqData = users.find(req => req._id === id);

    console.log('reqData', reqData?.name);
    console.log('myData', myData?.bioId);




    const totalPrice = 500;
    // this value is static for every normal to premium membership 

    useEffect(() => {

        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', {
                price: totalPrice
            })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice]);



    setTimeout(() => {
        setError('');
    }, 5000);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');

        Swal.fire({
            title: "Are you Proceed to Pay?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Pay Now!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                if (!stripe || !elements) {

                    return;
                }

                const card = elements.getElement(CardElement);

                if (card == null) {
                    return;
                }

                // Use your card Element with other Stripe.js APIs
                const { error, paymentMethod } = await stripe.createPaymentMethod({
                    type: 'card',
                    card,
                });

                if (error) {
                    console.log('[error]', error);
                    setError(error.message);
                } else {
                    console.log('[PaymentMethod]', paymentMethod);
                }

                // confirm payment 
                const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: user?.name || 'anonymous',
                            email: user?.email || 'anonymous'
                        },
                    },
                })

                if (confirmError) {
                    console.log('confirmError ', confirmError);
                }
                else {
                    console.log('paymentIntent ', paymentIntent);
                    if (paymentIntent.status === 'succeeded') {
                        console.log('Transaction ID: ', paymentIntent.id);
                        setTransactionId(paymentIntent.id);

                        const payment = {
                            email: user.email,
                            name: user.name,
                            price: totalPrice,
                            transactionId: paymentIntent.id,
                            date: new Date().toLocaleString(),
                            refUserId: refUserId,
                            refBioId:reqData?.bioId,
                            refName: reqData?.name,
                            refEmail: reqData?.email,
                            refMobileNumber: reqData?.mobileNumber,
                            status: 'pending'
                        }
                        const res = await axiosSecure.post('/payments', payment);
                        console.log('payment saved: ', res.data);
                        console.log('payment saved: ', res.data?.message);

                        if (res.data.paymentResult?.insertedId) {
                            console.log('payment succeed');
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Payment Completed!",
                                text: `TxId: ${paymentIntent?.id}`,
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    }
                }
            }
        });


    };



    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-md p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
                {transactionId &&
                    <div className="border my-4 p-1">
                        <p className="font-bold text-black text-sm">Payment Succeed.</p>
                        <p className="font-bold text-green-500 text-sm mb">Transaction ID [{transactionId}]</p>
                    </div>
                }
                <h2 className="text-2xl text-blue-500 font-semibold mb-2">Pay with Stripe</h2>

                <div className="border p-2 mb-4">
                    <h2 className="text-pink-900 text-sm font-semibold mb-1">BioData ID: [{reqData?.bioId}]</h2>
                    <h2 className="text-pink-900 text-sm font-semibold mb-1">My BioData ID: [{myData?.bioId}]</h2>
                    <h2 className="text-pink-900 text-sm font-semibold mb-1">My Email: [{user?.email}]</h2>
                <h2 className="text-pink-500 text-sm font-bold">Amount: [BDT 500.00] Only!</h2>
                </div>

                <div className="mb-8">
                    {/* Your CardElement component goes here */}
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                {
                    error && <p className="text-red-500 font-bold text-sm stroke-black p-2">Error! {error}..!!</p>
                }
                <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>

            </form>
        </div>

    );
};

export default CheckoutForm;