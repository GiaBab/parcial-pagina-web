const btnSwitch = document.querySelector('.switch');
const body = document.querySelector('body');

btnSwitch.addEventListener('click', () => 
    {
        body.classList.toggle('bg-light') ;
        body.classList.toggle('text-dark') ;
        body.classList.toggle('bg-dark') ;
        body.classList.toggle('text-white');
        btnSwitch.classList.toggle('active') ;
    })