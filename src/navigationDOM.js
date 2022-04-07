import { saveLocalStorageProj } from "./navigationlogic"

const projInput = document.querySelector('#projectinput')
const projList = document.querySelector('.projlist')

const appendProject = (projName) => {
    if (projInput.value === '') {return}
    saveLocalStorageProj(projName)
    const listItem = document.createElement('li')
    listItem.innerText = projInput.value
    listItem.classList.add(projInput.value)
    projList.appendChild(listItem)
    console.log(localStorage)
}



export {appendProject}