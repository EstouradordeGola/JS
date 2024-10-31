const container = document.querySelector(".container")
const botaoReiniciar = document.querySelector("button")
let cartas;
let primeiraCarta = "";
let segundaCarta = "";

//imagens
const items = [
    { nome: "Chuva", imagem: "img/Christiano-Ronaldo.jpeg" },
    { nome: "BolaCabeça", imagem: "img/cr7thegoat.jpeg"},
    { nome: "Crisdog", imagem: "img/cris-dog.jpeg"},
    { nome: "Cristo", imagem: "img/cris-to.jpeg" },
    { nome: "crischampions", imagem: "img/crischampions.jpeg"},
    { nome: "crisorelha", imagem: "img/crisorelha.jpeg"},
    { nome: "crisportugal", imagem: "img/crisportugal.jpeg"},
    { nome: "criscomemora", imagem: "img/Cristiano-Ronaldo.jpeg"},
    { nome: "crisunited", imagem: "img/Cristianochampunited.jpeg"},
];

function criarCartas(){
    let itensDuplicado = [...items, ...items]


    //organizar as imagens aleatoriamente
    let cristianos = itensDuplicado.sort(()=> Math.random() -0.5)
    
    cristianos.map( cristiano =>{
    container.innerHTML += `
    <div class=""carta" data-carta=${cristiano.nome}
    <div class="atras">?</div>
    <div class="frente">
    <img src=${cristiano.imagem} width="100px" height="120px"/>
    </div>
    </div>`;
        
    });
   
}
criarCartas();


function virarCarta(){
    cartas = document.querySelectorAll(".cartas");

    cartas.forEach(carta =>{
        carta.addEventlistener("click", ()=>{
            if(primeiraCarta == ""){
                carta.classList.add("carta-virada");
                primeiraCarta = carta;
            }
        });
    });
}
virarCarta();