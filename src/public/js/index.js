//scroll del navbar
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }else{
        $('nav').removeClass('black');
    }
})


//scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function evitarSpam(){return!document.getElementById("nospam").value}window.sr=ScrollReveal(),sr.reveal(".navbar",{duration:2e3,origin:"bottom"}),sr.reveal(".titulo-superior",{duration:2e3,origin:"right",distance:"300px"}),sr.reveal(".titulo-inferior",{duration:2e3,origin:"left",distance:"300px"}),sr.reveal(".hidde-titulo",{duration:2e3,origin:"right",distance:"300px"}),sr.reveal(".titulo-nosotros",{duration:2e3,origin:"right",distance:"300px"}),sr.reveal(".parrafo-nosotros",{duration:2e3,origin:"left",distance:"300px"}),sr.reveal(".titulo-mision",{duration:2e3,origin:"top",distance:"300px"}),sr.reveal(".parrafo-mision",{duration:2e3,origin:"left",distance:"300px"}),sr.reveal(".titulo-vision",{duration:2e3,origin:"top",distance:"300px"}),sr.reveal(".parrafo-vision",{duration:2e3,origin:"right",distance:"300px"}),sr.reveal(".titulo-servicios",{duration:2e3,origin:"top",distance:"300px"}),sr.reveal(".card-shipping",{duration:2e3,origin:"bottom",distance:"300px"}),sr.reveal(".card-movimiento",{duration:2500,origin:"bottom",distance:"300px"}),sr.reveal(".card-contenedores",{duration:3e3,origin:"bottom",distance:"300px"}),sr.reveal(".llegamos",{duration:3e3,origin:"left",distance:"300px"}),sr.reveal(".parrafo-llegamos",{duration:3e3,origin:"right",distance:"300px"}),sr.reveal(".direccion-1",{duration:3e3,origin:"left",distance:"300px"}),sr.reveal(".mapa-1",{duration:3e3,origin:"right",distance:"300px"}),sr.reveal(".direccion-2",{duration:3e3,origin:"right",distance:"300px"}),sr.reveal(".mapa-2",{duration:3e3,origin:"left",distance:"300px"});