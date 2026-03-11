import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import './TrackingPage.css'
import axios from 'axios';
import dayjs from 'dayjs';


export function TrackingPage( {cart} ) {
    const [order, setOrder] = useState(null)
    const {orderId, productId} = useParams();

    useEffect(() => {
        const fetchTrackingData = async() => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data)
        }

        fetchTrackingData();
    },[orderId])

    if (!order) {
        return null;
    }

    const selectProduct = order.products.find((product) => {
        return product.productId === productId
    })
    
    const totalDeliveryTimeMs = selectProduct.estimatedDeliveryTimeMs - order.orderTimeMs
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs

    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;

    if (deliveryPercent > 100) {
        deliveryPercent = 100;
    }

  const isPreparing = deliveryPercent < 33;
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
  const isDelivered = deliveryPercent === 100;

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/images/icons/tracking-favicon.png" />
            <title>Tracking</title>

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <a className="back-to-orders-link link-primary" href="/orders">
                        View all orders
                    </a>

                    <div className="delivery-date">
                        {deliveryPercent >= 100 ? 'Delivered on ': 'Arriving on '}
                        {dayjs(selectProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')} 
                    </div>

                    <div className="product-info">
                        {selectProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {selectProduct.quantity}
                    </div>

                    <img className="product-image" src={selectProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${isPreparing && 'current-status'}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${isShipped && 'current-status'}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${isDelivered && 'current-status'}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar"
                            style={{width: `${deliveryPercent}%`}}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    )
}