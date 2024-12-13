import { interiorOptions } from "./interiors.js"
import { submittedOrdersList } from "./orders.js"
import { paintOptions } from "./paints.js"
import { saveSubmissionButton } from "./saveOrderSubmission.js"
import { techpackageOptions } from "./technologies.js"
import { wheelOptions } from "./wheels.js"

const container = document.querySelector("#container")

const render = async () => {
    const paintsHTML = await paintOptions()
    const interiorsHTML = await interiorOptions()
    const wheelsHTML = await wheelOptions()
    const technologiesHTML = await techpackageOptions()
    const submissionButtonHTML = saveSubmissionButton()
    const ordersListHTML = await submittedOrdersList()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices_paints options">
                <h2>Paint Colors</h2>
                ${paintsHTML}
            </section>
                
            <section class="choices_interior options">
                <h2>Interiors</h2>
                ${interiorsHTML}
            </section>

            <section class="choices_paints options">
                 <h2>Wheels</h2>
                ${wheelsHTML}
            </section>
                
            <section class="choices_interior options">
                <h2>Technologies</h2>
                ${technologiesHTML}
            </section>
        </article>

        <article class="orderButton">
            ${submissionButtonHTML}
        </article>

         <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersListHTML}
        </article>
    `
    container.innerHTML = composedHTML
}

document.addEventListener("newCustomOrder", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()