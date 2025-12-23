const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = '';
    }
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});

list.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
