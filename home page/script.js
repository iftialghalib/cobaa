const tombol = document.querySelector('.tombol');
const nav = document.querySelector('nav ul');

tombol.addEventListener('click', function(){
    nav.classList.toggle('slide');
})