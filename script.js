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

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const tasks = list.getElementsByTagName('li');
    Array.from(tasks).forEach((task) => {
        const text = task.textContent.toLowerCase();
        task.style.display = text.indexOf(term) != -1 ? '' : 'none';
    });
});
