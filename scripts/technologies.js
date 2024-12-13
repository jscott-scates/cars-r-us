import { setTechpackageId } from "./transientState.js"

const handleTechpackageChange = (techpackageSelectedChangeEvent) => {
    if (techpackageSelectedChangeEvent.target.id === "technology") {
        const convertedToInteger = parseInt(techpackageSelectedChangeEvent.target.value)
        setTechpackageId(convertedToInteger)
    }
}

export const techpackageOptions = async () => {
    const response = await fetch ('http://localhost:8088/techpackages')
    const techpackages = await response.json()

    document.addEventListener(
        "change",
        handleTechpackageChange
    )

    let techpackageHTML = `<select id="technology">
                            <option value='0'>Please select your Technology Package:</option>`
    
    const techpackagesStringArray = techpackages.map(
        (techpackage) => {
            return `<option value=${techpackage.id}>${techpackage.package}</option>`
        }
    )
    techpackageHTML += techpackagesStringArray.join("")
    techpackageHTML += `</select>`

    return techpackageHTML

}