export const submittedOrdersList = async() => {
    const response = await fetch ('http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=techpackage&_expand=wheel')
    const orders = await response.json()

    let ordersHTML = ''
    const ordersStringArray = orders.map(
        (order) => {
            let orderPrice = order.paint.price + order.interior.price + order.techpackage.price + order.wheel.price
           
            orderPrice = orderPrice.toLocaleString("en-us", {
                style: "currency",
                currency: "USD"
            })

            return `
                <section class="order">
                    <div>${order.paint.color} car with ${order.wheel.option} wheels, ${order.interior.material}, and a ${order.techpackage.package} for a total cost of ${orderPrice}</div>
                </section>
            `
        }
    )
    ordersHTML += ordersStringArray.join('')
    return ordersHTML
}