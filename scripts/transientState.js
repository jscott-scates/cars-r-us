// set up the transient state data structure with initial values
const transientState = {
    "paintId":0,
    "interiorId": 0,
    "techpackageId":0,
    "wheelId":0
}


//functions to modify each property of the transient state

export const setPaintId = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorId = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechpackageId = (chosenTech) => {
    transientState.techpackageId = chosenTech
    console.log(transientState)
}

export const setWheelsId = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}

//function that converts a transientState into a placedOrder

export const savePlacedOrder = async () => {
    const today = new Date();
    const payload = {
        ...transientState,
        createdAt: today.toISOString(),
    }
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }
    const response = await fetch (' http://localhost:8088/orders', postOptions)

    const customEvent = new CustomEvent("newCustomOrder")
    document. dispatchEvent(customEvent)
}