import { savePlacedOrder } from "./transientState.js"

const handleOrderSubmissionClick = (orderPlacedClickEvent) => {
    if (orderPlacedClickEvent.target.id === 'placedOrder'){
        savePlacedOrder()
    }
}

export const saveSubmissionButton = () => {

    document.addEventListener(
        "click",
        handleOrderSubmissionClick
    )

    return `<div><button id='placedOrder'>Place Custom Order</button></div>`
}