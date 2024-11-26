const button = document.getElementById("add");
const todolist = document.getElementById("todolist");
const input = document.getElementById("input");

let todos =[]
//using local storage
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addTodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    console.log(todos)
    //using local storage
    localStorage.setItem('todos',JSON.stringify(todos))
    addTodo(input.value)
    input.value= "";
})

function addTodo (todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todolist.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todolist.removeChild(para)
        remove(todo)
    })
}
function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))

}