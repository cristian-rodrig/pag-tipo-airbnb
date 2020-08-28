


document.addEventListener('DOMContentLoaded', ()=>{

    //Obtener la imagen
    const imagenHero= document.querySelector('.hero');

    //Inicializar las variables
    let i=0;
    let tiempo=0;

    //Arreglo con imagenes de fondo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];
    
    setInterval( () => {
        imagenHero.style.backgroundPositionX = '-'+ tiempo+'px';

        if(tiempo > 40){
            tiempo = 0; 
            imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";             
            if(i === imagenes.length -1){
                i = 0;
            }else {
                i ++;
            }
        }
        tiempo ++;
    },100);


    //boton flotante en el footer
    const btnFlotante = document.querySelector('.btn-flotante');
    btnFlotante.addEventListener("click",(e) =>{
        e.preventDefault();

        //Prevenimos default pero ejecutamos el siguiente codigo
        const footer = document.querySelector('.footer');
        if(footer.classList.contains('activo')){
            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
        }else{
            footer.classList.add('activo');
            btnFlotante.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
        }        

    });
});

 