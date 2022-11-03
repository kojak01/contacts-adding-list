const jeden = document.querySelector('#jeden');
console.log(jeden);
const dwa = document.querySelector('#dwa');
console.log(dwa);
const trzy = document.querySelector('#trzy');
console.log(trzy);

jeden.addEventListener('click', () => {
    jeden.style['background-color'] = 'black';
});

dwa.addEventListener('click', () => {
    dwa.style['background-color'] = 'green';
})

trzy.addEventListener('click', () => {
    trzy.style['background-color'] = 'white';
})