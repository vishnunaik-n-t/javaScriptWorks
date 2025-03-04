function renderTodo(todo) {
    const list = document.querySelector(".js-todo-list");

    const isChecked = todo.checked ? "done" : "";

    const node = document.createElement("li");

    node.setAttribute("class", `todo-item ${isChecked}`);
    node.setAttribute("data-key", todo.id);

    node.innerHTML = `
        <input id="${todo.id}" type="checkbox" class="todo-checkbox js-tick" ${todo.checked ? "checked" : ""}/> 
        <label for="${todo.id}" class="tick js-tick"></label>
        <span class="todo-text">${todo.text}</span>
        <button class="delete-todo js-delete-todo">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    list.append(node);
}

let todoItems = [];

let editId = null;

function addToDo(text) {
    if (editId) {
         
        todoItems = todoItems.map(todo => 
            todo.id === editId ? { ...todo, text } : todo
        );
        editId = null;  
    } else {
        
        const todo = { text, checked: false, id: Date.now() };
        todoItems.push(todo);
    }
    renderList();
}

function renderList() {
    const list = document.querySelector(".js-todo-list");
    list.innerHTML = "";  

    todoItems.forEach(todo => {
        renderTodo(todo);
    });
}

const form = document.querySelector("#id-form");
const input = document.querySelector(".to-do-input");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    
    const text = input.value.trim();

    if (text !== "") {
        addToDo(text);
        input.value = "";
        input.focus();
    }
});

document.querySelector(".js-todo-list").addEventListener("click", event => {
    if (event.target.closest(".todo-checkbox")) {
        const itemKey = event.target.closest("li").dataset.key;

         
        const todo = todoItems.find(todo => todo.id === Number(itemKey));
        if (todo) {
            todo.checked = event.target.checked;
            renderList();
        }
    }

    if (event.target.closest(".js-delete-todo")) {  
        const itemKey = event.target.closest("li").dataset.key;  
        deleteTodo(itemKey);
    }
});


function deleteTodo(key) {
    todoItems = todoItems.filter(todo => todo.id !== Number(key));  
    renderList();  
}

document.querySelector(".js-todo-list").addEventListener("click", event => {
    if (event.target.closest("li") && !event.target.closest(".js-delete-todo")) {  
        const itemKey = event.target.closest("li").dataset.key;  
        editTodo(itemKey);
    }
});


function editTodo(key) {
    const todo = todoItems.find(todo => todo.id === Number(key));
    if (todo) {
        input.value = todo.text;   
        input.focus();
        editId = todo.id;  
    }
}
