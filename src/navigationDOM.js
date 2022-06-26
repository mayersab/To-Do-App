const projInput = document.querySelector('#projectinput')
const projList = document.querySelector('.projlist')

const saveLocalStorageProj = (projName) => {
    let projects = []
    let projNameSerialized = JSON.stringify(projects)
    localStorage.setItem(`${projName}`, projNameSerialized)
}

// Writes HTML back to page on refresh
const drawListItem = () => {
     // Fix problem with order of list items
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        const li = document.createElement('li')
        li.innerText = key
        li.classList.add(`${key}`)
        projList.appendChild(li)
        
    }
}

// Allows you to add a list items to "Projects"
const appendProject = (projName) => {
    if (projInput.value === '') {return}
    saveLocalStorageProj(projName)
    const listItem = document.createElement('li')
    listItem.innerText = projInput.value
    listItem.classList.add(projInput.value)
    projList.appendChild(listItem)
    console.log(localStorage)
}



export {appendProject, saveLocalStorageProj, drawListItem}