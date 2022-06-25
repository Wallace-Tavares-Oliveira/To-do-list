const form = document.querySelector('#task_form');
const taskList = document.querySelector('#tasks');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.querySelector('#task_input');
    addTask(inputField.value);
    form.reset();
};

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createElement('description');

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.appendChild(taskDescriptionNode);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task_item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}