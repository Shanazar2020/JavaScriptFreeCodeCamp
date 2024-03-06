const inputHead = document.getElementById('input-head');
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');


let myLeads = [];

function saveToLocalStorage() {
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
}

function saveInput() {
    if (inputEl.value === '') {
        return;
    }

    const item = { head: inputHead.value, value: inputEl.value };
    myLeads.push(item);
    inputEl.value = '';
    inputHead.value = '';

    saveToLocalStorage();
    render(myLeads);
}

function clearLocalStorageAndRender() {
    setTimeout(() => {
        localStorage.clear();
        myLeads = [];
        render(myLeads);
    }, 0);
}


function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
        .then(() => console.log('Text copied to clipboard!'))
        .catch(err => console.error('Failed to copy text:', err));
}

function handleListClick(event) {
    const deleteIcon = event.target.closest('.delete-icon');
    const copyIcon = event.target.closest('.copy-icon');

    if (deleteIcon) {
        const leadId = parseInt(deleteIcon.dataset.id);
        myLeads.splice(leadId, 1);
        saveToLocalStorage();
        render(myLeads);
    } else if (copyIcon) {
        const textToCopy = copyIcon.dataset.text;
        copyToClipboard(textToCopy);
    }
}

inputBtn.addEventListener('click', saveInput);

inputHead.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        saveInput();
    }
});

inputEl.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        saveInput();
    }
});

deleteBtn.addEventListener('dblclick', clearLocalStorageAndRender);

ulEl.addEventListener('click', handleListClick);

function render(leads) {
    const listItems = leads.map(lead => `
        <li>
            <div class="list-item">
                <button class="icon-button copy-icon" data-text="${lead.value}">
                    <img class="icon" width="16" height="16" src="copy-icon.svg" alt="Copy">
                </button>
                <div class="text-container">
                    <span class="lead-head">${lead.head}</span>
                    <span class="lead-value">${lead.value}</span>
                </div>
                <button class="icon-button delete-icon" data-id="${leads.indexOf(lead)}">
                    <img class="icon" width="16" height="16" src="delete-icon.svg" alt="Delete">
                </button>
            </div>
        </li>
    `).join('');

    ulEl.innerHTML = listItems;
}

// Check local storage on page load
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}
