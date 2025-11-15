const pntsemente = document.getElementById("semente");
const pntplantinha = document.getElementById("plantinha");
const pntplanta = document.getElementById("planta");

pntsemente.addEventListener("mouseover",crescersemente);
pntplantinha.addEventListener("mouseover",crescerplantinha);
pntplanta.addEventListener("mouseout",crescerplanta);

const btnsemente = document.getElementById("btnsemente")
const btnplantinha = document.getElementById("btnplantinha")
const btnplanta = document.getElementById("btnplanta")
const btnAuto = document.getElementById("btnAuto")
const btnParar = document.getElementById("btnParar")

let intervalo;

function limpar(){
    pntsemente.className = 'pnt';
    pntplantinha.className = 'pnt';
    pntplanta.className = 'pnt';
}

function crescersemente(){
    pntsemente.src = "img1.jpeg";
}
function crescerplantinha(){
    pntplantinha.src ="img2.jpeg";
}
function crescerplanta(){
    pntplanta.src ="img3.jpeg";
}

function modoAutomatico(){
    limpar();
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0 ) crescersemente();
        else if (estado === 1) crescerplantinha();
        else if (estado === 2) crescerplanta();
        estado = (estado + 1) % 3;
    }, 1000)
}

function parar(){
    clearInterval(intervalo);
    limpar();
}

btnParar.onclick = parar;
btnAuto.onclick = modoAutomatico;
