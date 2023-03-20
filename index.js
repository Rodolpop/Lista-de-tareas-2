
//info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// task container

const tasksContainer = document.getElementById('tasksContainer');


// function

const setDate = () => {  

    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString('es',{day:'numeric'});
    dateText.textContent = date.toLocaleTimeString('es', {weekday:'long'});
    dateMonth.textContent = date.toLocaleDateString('es', {month:'short'});
    dateYear.textContent = date.toLocaleTimeString('es', {year:'numeric'});



};

const addNewTask = event => {

    event.preventDefault(); // evita default no haga un submit y nos quiera llevar a otra página
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();

};

const changeTaskState = event => {
    event.target.classList.toggle('done'); 

};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];

}


const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}


setDate();



