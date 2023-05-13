const btnSwitch = document.querySelector('.switch');
const $body = document.querySelector('body');
const $a = document.querySelectorAll('a');
const card = document.querySelector('.card');
const cardTexts = document.querySelectorAll('.card-obj')

function swapImages()
{
    // se encarga de cambiar las imagenes cuando se cambia de modo oscuro/claro
    
    var img = document.querySelector('#switchImg') ;
    var imgLogo = document.querySelector('#switchIcon') ;
    if(img.getAttribute('src') == 'modoOscuro.png')
    {
        img.setAttribute('src', 'modoLuminoso.png') ;
        imgLogo.setAttribute('src', '5f75b78d4598bd2f643c703d_virbela-dark-logo-p-500.png');
    }
    else
    {
        img.setAttribute('src', 'modoOscuro.png') ;
        imgLogo.setAttribute('src', '5f75b78d4598bd2f643c703d_virbela-white-logo-p-500.png')
    }
}

btnSwitch.addEventListener('click', () => 
    // cuando se haga click en el boton de modo oscuro/claro este cambia a lo que se seleciona
    {
        const themesClass = ['bg-light','text-dark','bg-dark','text-white'];
        swapImages() ;
        themesClass.forEach(a => $body.classList.toggle(a)) ;
        btnSwitch.classList.toggle('active') ;
        $a.forEach(a => a.classList.toggle(themesClass[3]));
        card.classList.toggle('card-dark') ;
        cardTexts.forEach(a => a.classList.toggle(themesClass[3]))
    }
)

// se encarga de mover el header y agregar efectos
window.onscroll = function() {scrollHeader()};

var $header = document.querySelector('header');
var sticky = $header.offsetTop;

function scrollHeader() 
{
    if (window.pageYOffset > sticky) 
    {
      $header.classList.add("sticky");
    } 
    else 
    {
      $header.classList.remove("sticky");
    }
}  

//validar registro

const fName = document.querySelector('#fName') ;
const lName = document.querySelector('#lName') ;
const cName = document.querySelector('#cName') ;
const email = document.querySelector('#email') ;
const $form = document.querySelector('form') ;
const warningText = document.querySelector('#warnings')

$form.addEventListener("submit", e => 
    {
        e.preventDefault() ;
        let warning = "" ;
        let regaxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        warningText.innerHTML = "" ;
        if(fName.value.length <= 3){warning+= "fist name not valid <br>" ;} 
        if(lName.value.length <= 3){warning+= "last name not valid <br>" ;}
        if(cName.value.length <= 5){warning+= "company not valid <br>" ;}
        if(!regaxEmail.test(email.value)){warning+= "email not valid <br>" ;}
        if(warning != "")
        {
            warningText.innerHTML = warning;
        }
        else
        {
            alert("enviado"); 
        }
    }
)