const addTaskBtn = document.querySelector('.addtodo')
const todoPopup = document.querySelector('.addtodomodal')
const titleOfTodos = document.querySelector('.todotitle')
const todoContainer = document.querySelector('.todocont') 
const todoName = document.querySelector('#todoinput')



// Adds and removes add task div
const addtodomodal = () => {
    todoName.value = ''
    addTaskBtn.classList.add('addtodoclicked')
    todoPopup.classList.add('addtodomodalactive')
}
const removeTodoModal = () => {
    addTaskBtn.classList.remove('addtodoclicked')
    todoPopup.classList.remove('addtodomodalactive')
}

// Allows user to view todos specific to each project
const viewTodos = (e) => {
    const key = e.target.className
    if (localStorage.getItem(key)) {
        titleOfTodos.innerText = key
        todoContainer.innerText = ''
        const arrParsed = JSON.parse(localStorage.getItem(key))
        for (let i = 0; i < arrParsed.length; i++) {
            let index = arrParsed.indexOf(arrParsed[i])
            let div = document.createElement('div')
            div.classList.add('todoitems')
            div.innerText = arrParsed[i].todo
            todoContainer.appendChild(div)
            let span = document.createElement('span')
            span.classList.add('removetodo')
            span.innerText = 'X'
            // Deletes todos out of localstorage
            span.addEventListener('click', (e) => {
                e.target.parentNode.remove()
                let newArrParsed = JSON.parse(localStorage.getItem(key))
                newArrParsed.splice(index,1)
                for (let i = 0; i < newArrParsed.length; i++) {
                    let newIndex = arrParsed.indexOf(newArrParsed[i])
                    newArrParsed[i].index = newIndex  
                }
                localStorage.setItem(titleOfTodos.innerText, JSON.stringify(newArrParsed))
            })
            div.appendChild(span)
        }
    }
}

// Factory fucntion for creating todo objects stored in project arrays
const newTodo = (todo) => {
    return {todo}
}

// Creates and appends todo divs to todo container
const pushTodo = (e) => {
    let todoArr = JSON.parse(localStorage.getItem(titleOfTodos.innerText))
    let todo = newTodo(todoName.value)
    todoArr.push(todo)
    let index = todoArr.indexOf(todo)
    todo.index = index
    let div = document.createElement('div')
    div.classList.add('todoitems')
    div.innerText = todoName.value
    todoContainer.appendChild(div)
    let span = document.createElement('span')
    span.classList.add('removetodo')
    span.innerText = 'X'
    // Deletes todo out of localstorage
    span.addEventListener('click', (e) => {
        e.target.parentNode.remove()
        let arrayParsed = JSON.parse(localStorage.getItem(titleOfTodos.innerText))
        arrayParsed.splice(index,1)
        for (let i = 0; i < arrayParsed.length; i++) {
            let newIndex = arrayParsed.indexOf(arrayParsed[i])
            arrayParsed[i].index = newIndex
        }
        localStorage.setItem(titleOfTodos.innerText, JSON.stringify(arrayParsed))
    })
    div.appendChild(span)
    localStorage.setItem(titleOfTodos.innerText, JSON.stringify(todoArr)) 
}

export {addtodomodal,
        removeTodoModal,
        viewTodos,
        pushTodo}