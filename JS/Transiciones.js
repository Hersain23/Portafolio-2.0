let cajaHabilidad = document.querySelectorAll(".habilidades");
let imagenes = ["/Recursos/Youtube.png","/Recursos/Bars.png","/Recursos/PokeApi.png"];
let flechas = document.querySelectorAll(".controlador");
let contadorImagen = 0;
let imagenCarrusel = document.getElementById("img");

document.addEventListener("DOMContentLoaded",()=>{
    let i = 0;
      
})

function setImagen(i){   
    return new Promise((resolve,reject)=>{
        setInterval(() => {
            
        }, 3000);
    })
}
cajaHabilidad.forEach(element => {
    element.addEventListener("mousemove",(e)=>{
            element.style.transform = "scale(1.1)"
            element.style.filter = "brightness(1.5)"
            
    })
});

cajaHabilidad.forEach(element => {
    element,addEventListener("mouseout",(e)=>{
        element.style.transform = "scale(1)"
        element.style.filter = "brightness(1)"
    })
});

flechas[0].addEventListener("click",()=>{
    
})

flechas[1].addEventListener("click",()=>{

})