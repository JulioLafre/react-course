import { formatMoney } from "../../utils/money";

export function PaymentSummmary({paymentSummmary}) {
    return (
        <div className="payment-summary">
            <div className="payment-summary-title">
                Payment Summary
            </div>
            {paymentSummmary && (
                <>
                    <div className="payment-summary-row">
                        <div>Items ({paymentSummmary.totalItems}):</div>
                        <div className="payment-summary-money">
                            {formatMoney(paymentSummmary.productCostCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div className="payment-summary-money">
                            {formatMoney(paymentSummmary.shippingCostCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div className="payment-summary-money">
                            {formatMoney(paymentSummmary.totalCostBeforeTaxCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div className="payment-summary-money">
                            {formatMoney(paymentSummmary.taxCents)}
                        </div>
                    </div>

                    <div className="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div className="payment-summary-money">
                            {formatMoney(paymentSummmary.totalCostCents)}
                        </div>
                    </div>

                    <button className="place-order-button button-primary">
                        Place your order
                    </button>
                </>
            )}
        </div>
    );
}