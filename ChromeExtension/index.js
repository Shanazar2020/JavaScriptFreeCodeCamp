let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', () => {
    if (inputEl.value === ''){
        return
    }

    myLeads.push(inputEl.value);
    inputEl.value = '';
    console.log(myLeads);
    
    renderLeads();
});

function renderLeads(){
    let listItems = '';
    for (let i = 0; i < myLeads.length; i++){
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}
