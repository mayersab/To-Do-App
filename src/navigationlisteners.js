import "./style.css"
import { appendProject, drawListItem } from "./navigationDOM"

import { addtodomodal, removeTodoModal, viewTodos, pushTodo } from "./todologic"

// Project variables in <aside></aside>
const addProjectBtn = document.querySelector('.addproj')
const projModal = document.querySelector('.modalcont')
const escProjModal = document.querySelector('.esc')

const projSubmitBtn = document.querySelector('#projsubmit')
const projCancelBtn = document.querySelector('#projcancel')

const projects = document.querySelector('.projtitle')
const projList = document.querySelector('.projlist')


const projInput = document.querySelector('#projectinput')

// Todo variables in <article></article>
const addTaskDiv = document.querySelector('.addtodo')
const todoInput = document.querySelector('#todoinput')
const submitTaskBtn = document.querySelector('#todosubmit')
const cancelTaskBtn = document.querySelector('#todocancel')


// Creates and removes popup to add todos
const addTodoPopup = () => {
    addTaskDiv.addEventListener('click', (e) => {
        addtodomodal()
    })
}
    
const removeTodoPopup = () => {
    submitTaskBtn.addEventListener('click', (e) => {
        todoInput.value !== '' ? pushTodo() : alert('Task cannot be empty')
        removeTodoModal()
    })
    cancelTaskBtn.addEventListener('click', (e) => {
        removeTodoModal()
    })
}

// Draws HTML list items back to page on refresh
const windowRefresh = () => {
    window.addEventListener('load', (e) => {
        
        drawListItem()

    })
}

// A modal which allows for adding list items to "Projects"
const addAProjectModal = () => {
    addProjectBtn.addEventListener('click', (e) => {
        projInput.value = ''
        projModal.classList.add('modalactive')
    })
}

// Allows you to exit modal by clicking "X"
const removeProjectModal = () => {
    escProjModal.addEventListener('click', (e) => {
        projModal.classList.remove('modalactive')
    })
    projCancelBtn.addEventListener('click', (e) => {
        projModal.classList.remove('modalactive')
    })
}

// Allows you to view todos specific to each list item in "Projects"
const viewTodosInAProject = () => {
    projList.addEventListener('click', (e) => {
        viewTodos(e)

    })
}

// Allows you to view individual list items when clicking on "Projects"
const showProjList = () => {
    projects.addEventListener('click', (e) => {
        projList.classList.toggle('projlist-active')
    })
}

// Appends list items to "Projects"
const addProject = () => {
    projSubmitBtn.addEventListener('click', (e) => {
        appendProject(projInput.value)
        projModal.classList.remove('modalactive')
        if (projList.classList.contains('projlist-active')) {return}
        if (projList.classList.contains('projlist-active') === false) {projList.classList.add('projlist-active')}
        
    })
}

// Exports
export {addAProjectModal, 
        removeProjectModal, 
        showProjList,
        addProject,
        appendProject,
        windowRefresh,
        addTodoPopup,
        removeTodoPopup,
        viewTodosInAProject}