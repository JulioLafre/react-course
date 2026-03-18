import axios from 'axios'
import { CheckoutHeader } from './CheckoutHeader'
import './CheckoutPage.css'
import { useEffect, useState } from 'react'
import { OrderSumary } from './OrderSummary'
import { PaymentSummmary } from './PaymentSummary'

export function CheckoutPage({ cart, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummmary, setPaymentSummary] = useState(null)

    useEffect(() => {
        const fetchCheckoutData = async() => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)

            response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data) }

            fetchCheckoutData();
    }, [cart]);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/images/icons/cart-favicon.png" />
            <title>Checkout</title>
            <CheckoutHeader cart={ cart }/>
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSumary 
                        cart={cart} 
                        deliveryOptions={deliveryOptions}
                        loadCart={loadCart}
                    />
                    <PaymentSummmary 
                        paymentSummmary={paymentSummmary}
                        loadCart={loadCart}
                    />
                </div>
            </div>
        </>
    )
}