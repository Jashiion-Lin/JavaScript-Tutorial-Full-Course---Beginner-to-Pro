const todoList = [{
  name: 'make dinner',dueDate: '12-22-2022'},{
  name: 'wash dishes',dueDate: '12-22-2022'}];

function renderTodoList() {
  let todoListHTML = '';
  //forEacn() mathod
  todoList.forEach((todoObject,index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete">Delete</button>`;
    todoListHTML += html;
  })
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete')
    .forEach((deleteButton,index) => {
      deleteButton.addEventListener('click',() => {
        todoList.splice(index,1);
        renderTodoList();
      })
    })
  /* // for method
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
      " class="js-delete">Delete</button>
    `;
    todoListHTML += html;
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
    }
    */ 
  }

renderTodoList();

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputeElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputeElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}  
document.querySelector('.js-add')
  .addEventListener('click', () => {
    addTodo();
  })