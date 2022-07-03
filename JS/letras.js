var letras = ["H","O","L","A",",","&nbsp","S","O","Y","&nbsp","D","A","N","I","E","L"]
document.addEventListener("DOMContentLoaded",()=>{
    let containerLetras = document.getElementById("letras")    
    let i = 0;
    let mensaje="";
    let id = setInterval(()=>{
        let l = letras[i]
        mensaje = mensaje + l; 
        i++;
        containerLetras.innerHTML = mensaje
        if(i==16){
            clearInterval(id)
        }
    },400)
})