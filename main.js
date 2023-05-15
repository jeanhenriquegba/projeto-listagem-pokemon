const alterarTema = document.getElementById("botao-alterar-tema");
const corpo = document.querySelector("body");
let temaicone = document.querySelector(".imagem-botao");
let temaescuro = false;

alterarTema.addEventListener('click',()=>{
if(!temaescuro){
corpo.classList.add('modo-escuro')
temaescuro = true;
temaicone.src = './imagens/moon.png';
}else{
corpo.classList.remove('modo-escuro')
temaescuro = false;
temaicone.src = './imagens/sun.png';
}
});