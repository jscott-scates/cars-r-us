import { setPaintId } from "./transientState.js"

const handlePaintChange = (paintSelectedChangeEvent) => {
    if (paintSelectedChangeEvent.target.id === "paint") {
        const convertedToInteger = parseInt(paintSelectedChangeEvent.target.value)
        setPaintId(convertedToInteger)
    }
}

export const paintOptions = async () => {
    const response = await fetch ('http://localhost:8088/paints')
    const paints = await response.json()

   document.addEventListener(
    "change",
    handlePaintChange
   )

    let paintsHTML = `<select id="paint">
                            <option value='0'>Please select paint color:</option>`
    
    const paintsStringArray = paints.map(
        (paint) => {
            return `<option value=${paint.id}>${paint.color}</option>`
        }
    )
    paintsHTML += paintsStringArray.join(" ")
    paintsHTML += `</select>`

    return paintsHTML

}