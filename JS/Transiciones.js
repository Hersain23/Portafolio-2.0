let cajaHabilidad = document.querySelectorAll(".habilidades");
cajaHabilidad.forEach(element => {
    element.addEventListener("mousemove",(e)=>{
            element.style.transform = "scale(1.3)"
           /* element.style.filter = "brightness(1.5)"*/
            
    })
});

cajaHabilidad.forEach(element => {
    element,addEventListener("mouseout",(e)=>{
        element.style.transform = "scale(1)"
       /* element.style.filter = "brightness(1)"*/
    })
});