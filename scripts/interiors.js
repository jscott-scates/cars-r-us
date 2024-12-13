import { setInteriorId } from "./transientState.js"

const handleInteriorChange = ( interiorSelectedChangeEvent) => {
    if(interiorSelectedChangeEvent.target.id === "interior") {
        const convertedToInteger = parseInt(interiorSelectedChangeEvent.target.value)
        setInteriorId(convertedToInteger)
    }
}

export const interiorOptions = async () => {
    const response = await fetch ('http://localhost:8088/interiors')
    const interiors = await response.json()

    document.addEventListener(
        "change",
        handleInteriorChange
    )

    let interiorsHTML = `<select id="interior">
                            <option value='0'>Please select your interior Package:</option>`
    
    const interiorsStringArray = interiors.map(
        (interior) => {
            return `<option value=${interior.id}>${interior.material}</option>`
        }
    )
    interiorsHTML += interiorsStringArray.join("")
    interiorsHTML += `</select>`

    return interiorsHTML

}