import { setWheelsId } from "./transientState.js"

const handleWheelChange = (wheelSelectedChangeEvent) => {
    if (wheelSelectedChangeEvent.target.id === "wheel"){
        const convertedToInteger = parseInt(wheelSelectedChangeEvent.target.value)
        setWheelsId(convertedToInteger)
    }
}

export const wheelOptions = async () => {
    const response = await fetch ('http://localhost:8088/wheels')
    const wheels = await response.json()

    document.addEventListener(
        "change",
        handleWheelChange
    )

    let wheelsHTML = `<select id="wheel">
                            <option value='0'>Please select your wheel Package:</option>`
    
    const wheelsStringArray = wheels.map(
        (wheel) => {
            return `<option value=${wheel.id}>${wheel.option}</option>`
        }
    )
    wheelsHTML += wheelsStringArray.join("")
    wheelsHTML += `</select>`

    return wheelsHTML

}