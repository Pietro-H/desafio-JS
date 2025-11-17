const germinacao = document.getElementById("germinacao")


function semente(){
    germinacao.scr = "img1.jpeg"
    document.body.style.background = "rgba(59, 148, 37, 0.66)"
        console.log("img1");
}

function plantinha(){
    germinacao.src = "img2.jpeg"
    document.body.style.background = "rgba(59, 148, 37, 0.66)"
        console.log("img2");
}
function planta(){
    germinacao.src = "img3.jpeg"
    document.body.style.background = "rgba(59, 148, 37, 0.66)"
        console.log("img3");
}
function plantaadulta(){
    germinacao.src = "img4.png"
    document.body.style.background = "rgba(59, 148, 37, 0.66)"
        console.log("img4");
}

function automatico(){
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0) plantinha();
        if(estado === 2) planta();
        else if(estado === 1) plantaadulta();
        estado = (estado + 2) % 3;
    }, 450)
}

function parar(){
    clearInterval(intervalo);
    limpar();
}

btnsemente.onclick = semente;
btnplantinha.onclick = plantinha;
btnplanta.onclick = planta;
btnplantaadulta.onclick = plantaadulta;
btnautomatico.onclick = automatico;
btnparar.onclick = parar;