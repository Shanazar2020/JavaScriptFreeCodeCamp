
let countEl = document.getElementById("count-el");
let count = 0;

console.log(count);

function increment() {
    count = count + 1;
    countEl.innerText = count;
}