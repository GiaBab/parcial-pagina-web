const btnSwitch = document.querySelector('.switch');
const $body = document.querySelector('body')
const navList = document.querySelectorAll('.nav-link')

function swapImages()
{
    var img = document.querySelector('#switchImg') ;
    if(img.getAttribute('src') == 'modoOscuro.png')
    {
        img.setAttribute('src', 'modoLuminoso.png') ;
    }
    else
    {
        img.setAttribute('src', 'modoOscuro.png') ;
    }
}

btnSwitch.addEventListener('click', () => 
    {
        swapImages() ;
        $body.classList.toggle('bg-light') ;
        $body.classList.toggle('text-dark') ;
        $body.classList.toggle('bg-dark') ;
        $body.classList.toggle('text-white');
        btnSwitch.classList.toggle('active') ;
        navList.forEach(a => a.classList.toggle('text-white'));
    })