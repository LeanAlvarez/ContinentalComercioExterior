//scroll del navbar
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }else{
        $('nav').removeClass('black');
    }
})


var shipping = document.getElementById('verMas-shipping')
var carga = document.getElementById('verMas-carga')
var contenedores = document.getElementById('verMas-contenedores')

function click_shipping(){
  alert('anda')
}


function click_carga(){
    alert("cuidamos tu carga")
}


function click_contenedores(){
    alert("enviamos en contenedor")
}

