const projInput = document.querySelector('#projectinput')
const projList = document.querySelector('.projlist')

const saveLocalStorageProj = (projName) => {
    let projects = []
    let projNameSerialized = JSON.stringify(projects)
    localStorage.setItem(`${projName}`, projNameSerialized)
}

const drawListItem = () => {
     // Writes HTML back to page on refresh
     // Fix problem with order of list items
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        const li = document.createElement('li')
        li.innerText = key
        li.classList.add(`${key}`)
        projList.appendChild(li)
        console.log(localStorage)
        
    }
}

const displayToDo = () => {
    
}

export {saveLocalStorageProj, drawListItem}