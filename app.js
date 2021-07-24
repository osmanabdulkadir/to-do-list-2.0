//selcetor 

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//eventlisters 
todoButton.addEventListener('click', addTodo)
todolist.addEventListener('click', deleteCheck())
//functions

function addTodo(event){
   
    //prevent form form submitting
    event.preventDefault();
//todo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to List
    todoList.appendChild(todoDiv);
    // clear todo input Value
    todoInput.value = ""


}
// deletes item from our list

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        
        todoInput.remove();
    }

}

