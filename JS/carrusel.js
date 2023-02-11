let imagenes = ["/Recursos/Youtube.png","/Recursos/Bars.png","/Recursos/PokeApi.PNG"];
let flechas = document.querySelectorAll(".controlador");

let izquierda = document.getElementById("izquierda");
let derecha = document.getElementById("derecha");
let pos = 0;

izquierda.addEventListener("click",()=>{
    if(pos == 0){
        let promise = new Promise((resolve, reject)=>{
        resolve( 
            document.querySelector(".imagen").style.opacity = "0"
        )
        })
        promise
        .then(()=>{
            setTimeout(()=>{
            document.querySelector(".imagen").style.opacity = "1"
            document.querySelector(".imagen").src = imagenes[2];
            pos = 2;
        },1100)
        })
        .catch()
    }else{
        pos--;
        let promise = new Promise((resolve, reject)=>{
            resolve( 
                document.querySelector(".imagen").style.opacity = "0"
            )
            })
            promise
            .then(()=>{
                setTimeout(()=>{
                document.querySelector(".imagen").style.opacity = "1"
                document.querySelector(".imagen").src = imagenes[pos];
            },1100)
            })
            .catch()
    }
});

derecha.addEventListener("click",()=>{
    if(pos == 2){
        pos = 0;
        let promise = new Promise((resolve, reject)=>{
            resolve( 
                document.querySelector(".imagen").style.opacity = "0"
            )
            })
            promise
            .then(()=>{
                setTimeout(()=>{
                document.querySelector(".imagen").style.opacity = "1"
                document.querySelector(".imagen").src = imagenes[pos];
            },1100)
            })
            .catch()
    }
    else{
        pos++;
        let promise = new Promise((resolve, reject)=>{
            resolve( 
                document.querySelector(".imagen").style.opacity = "0"
            )
            })
            promise
            .then(()=>{
                setTimeout(()=>{
                document.querySelector(".imagen").style.opacity = "1"
                document.querySelector(".imagen").src = imagenes[pos];
            },1100)
            })
            .catch()
        
    }
})
