import axios from "axios";
import {useNavigate} from 'react-router'
import { formatMoney } from "../../utils/money";

export function PaymentSummmary({paymentSummmary, loadCart}) {
    const navigate = useNavigate();

    const createOrder = async () => {
      await axios.post(`/api/orders/`)  
      await loadCart();

      navigate('/orders')
    };

    return (
        <div className="payment-summary">
            <div className="payment-summary-title">
                Payment Summary
            </div>
            {paymentSummmary && (
                <>
                    <div className="payment-summary-row">
                        <div>Items ({paymentSummmary.totalItems}):</div>
                        <div className="payment-summary-money" data-testid="payment-summary-product-cost">
                            {formatMoney(paymentSummmary.productCostCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div className="payment-summary-money" data-testid="payment-summary-shipping-cost">
                            {formatMoney(paymentSummmary.shippingCostCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div className="payment-summary-money" data-testid="payment-summary-total-before-tax">
                            {formatMoney(paymentSummmary.totalCostBeforeTaxCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div className="payment-summary-money" data-testid="payment-summary-tax">
                            {formatMoney(paymentSummmary.taxCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div className="payment-summary-money" data-testid="payment-summary-total">
                            {formatMoney(paymentSummmary.totalCostCents)}
                        </div>
                    </div>

                    <button className="place-order-button button-primary"
                        data-testid="place-order-button"
                        onClick={createOrder}> 
                        Place your order
                    </button>
                </>
            )}
        </div>
    );
}