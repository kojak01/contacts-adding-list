const jeden = document.querySelector('#jeden');
console.log(jeden);
const dwa = document.querySelector('#dwa');
console.log(dwa);
const trzy = document.querySelector('#trzy');
console.log(trzy);

jeden.addEventListener('click', () => {
    console.log('klik w jeden');
    jeden.style['background-color'] = 'black';
});

dwa.addEventListener('click', () => {
    console.log('klik w dwa');
    dwa.style['background-color'] = 'green';
})

trzy.addEventListener('click', () => {
    console.log('klik w trzy');
    trzy.style['background-color'] = 'white';
})