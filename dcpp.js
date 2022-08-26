

const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('.conteudo__principal__formulario button');
const feed = document.querySelector('.conteudo__principal__listatweets');

function pegarTweet(event){
    event.preventDefault();

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
    
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto){

let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();


//objeto
    const tweet = {
        nome: "tawan",
        foto: "img/avatar-perfil.png",
        usuario: "@tawanmatos",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`,


    }

     listarTamplateTweet(tweet)
}

function listarTamplateTweet(tweet){

    const {nome, foto, usuario, texto, tempo} = tweet 

    //criando elementos para criar tamplate
let li = document.createElement("li")
li.classList.add("conteudo__principal__tweet")
let img = document.createElement("img")
    img.src = foto
    img.classList.add("tweet__fotoperfil")

let div = document.createElement("div")
    div.classList.add("feed__conteudo")

let h2 = document.createElement("h2")
    h2.innerText = nome


let span = document.createElement("span")
    span.innerText = `${usuario}  ${tempo}`

let p = document.createElement("p")
    p.innerText = texto

//adicionando elementos dentro da div

div.appendChild(h2)
div.appendChild(span)
div.appendChild(p)

//adicionando elementos dentro da li
li.appendChild(img)
li.appendChild(div)

feed.appendChild(li)

textarea.value = ""

}