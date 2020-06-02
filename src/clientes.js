const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-client-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const addButton = document.querySelector('[button-add-to-list]')

// const LOCAL_STORAGE_LIST_KEY = 'task.lists'


// let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []



newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.Value
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
    
})

function createList(name){
    return { id: Date.now().toString(), name: name, adress: [] }
}

function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}


 



    


function render() {
    
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add('list-name')
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)        
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()
