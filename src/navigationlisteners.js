import "./style.css"
import { appendProject } from "./navigationDOM"
import { drawListItem } from "./navigationlogic"

const addProjectBtn = document.querySelector('.addproj')
const projModal = document.querySelector('.modalcont')
const escProjModal = document.querySelector('.esc')

const projSubmitBtn = document.querySelector('#projsubmit')

const projects = document.querySelector('.projtitle')
const projList = document.querySelector('.projlist')
const listItem = document.querySelector('li')

const projInput = document.querySelector('#projectinput')

const appendToDO = () => {
    
}

// Draws HTML list items back to page on refresh
const windowRefresh = () => {
    window.addEventListener('load', (e) => {
        drawListItem()
        
    })
}

// Form pop up that allows you to add project list items
const addProjModal = () => {
    addProjectBtn.addEventListener('click', (e) => {
        projInput.value = ''
        projModal.classList.add('modalactive')
    })
}

// Allows you to exit form by clicking "X"
const remProjModal = () => {
    escProjModal.addEventListener('click', (e) => {
        projModal.classList.remove('modalactive')
    })
}

// Allows you to view list items
const showProjList = () => {
    projects.addEventListener('click', (e) => {
        projList.classList.toggle('projlist-active')
    })
}

// Appends list items to page
const addProject = () => {
    projSubmitBtn.addEventListener('click', (e) => {
        appendProject(projInput.value)
        projModal.classList.remove('modalactive')
        if (projList.classList.contains('projlist-active')) {return}
        if (projList.classList.contains('projlist-active') === false) {projList.classList.add('projlist-active')}
        
    })
}


export { addProjModal, remProjModal, showProjList, addProject, appendProject, windowRefresh}