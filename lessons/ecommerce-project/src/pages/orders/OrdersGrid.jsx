import { OrderHead } from "./OrderHead"
import { OrderDetailGrid } from "./OrderDetailGrid"

export function OrdersGrid( {orders} ) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">

                        <OrderHead order={order} />

                        <OrderDetailGrid order={order} />
                    </div>
                )
            })}
        </div>
    )
}