const mainInp = document.getElementById('main-form__input');
const addBtn = document.querySelector('.main-form__button');
const defaultBoard = document.querySelector('.tasks__content');
const tasksCounter = document.getElementById('tasks-counter');
const tasksDone = document.getElementById('tasks-done');
const tasksBoard = document.querySelector('.tasks__board');

let removeTaskCounter = 0;

function countersCanger() {
    tasksCounter.textContent++;
    tasksDone.innerHTML = `${removeTaskCounter} / ${tasksCounter.textContent}`;
}

function createDiv() {
    let newDiv = document.createElement('div');
    newDiv.classList.add('task-active');

    let bulletAndName = document.createElement('div');
    bulletAndName.classList.add('bullet-and-name');

    let bullet = document.createElement('img');
    bullet.src = './static/images/svg/bullet.svg';

    let taskName = document.createElement('span');
    if (mainInp.value === "") {
        taskName.textContent = `დავალება ${tasksCounter.textContent}`;
    } else {
        taskName.textContent = `${mainInp.value}`;
    }

    let trash = document.createElement('img');
    trash.src = './static/images/svg/trash.svg';

    bulletAndName.appendChild(bullet);
    bulletAndName.appendChild(taskName);
    newDiv.appendChild(bulletAndName);
    newDiv.appendChild(trash);
    tasksBoard.appendChild(newDiv);

    function taskDone() {
        bulletAndName.classList.toggle('task-is-done');
        if (bulletAndName.classList.contains('task-is-done')) {
            bullet.src = './static/images/svg/checked.svg';
            tasksDone.textContent = `${removeTaskCounter = removeTaskCounter + 1} / ${tasksCounter.textContent}`;
        } else {
            bullet.src = './static/images/svg/bullet.svg';
            tasksDone.textContent = `${removeTaskCounter = removeTaskCounter - 1} / ${tasksCounter.textContent}`;
        }
    }

    bulletAndName.addEventListener('click', taskDone);

    trash.addEventListener('click', function() {
        removeTask(newDiv);
    });
}

function removeTask(taskToRemove) {
    if (taskToRemove.querySelector('.bullet-and-name').classList.contains('task-is-done')) {
        removeTaskCounter--; 
    }

    tasksCounter.textContent--;
    tasksDone.textContent = `${removeTaskCounter} / ${tasksCounter.textContent}`;

    taskToRemove.remove();
}

function addtasks(event) {
    event.preventDefault();
    defaultBoard.classList.add('tasks__content--hide');

    countersCanger();
    createDiv();
    mainInp.value = '';
}

addBtn.addEventListener('click', addtasks);
