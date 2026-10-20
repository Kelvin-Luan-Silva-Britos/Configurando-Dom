//1. SELECIONAR os elementos do DOM
const campo = document.getElementById("tarefa");
const botao= document.getElementById("adicionar");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contandor");

//2. FUNÇÃO que cria uma nova tarefa
function adicionarTarefa(){
    const texto = campo.value.trim();
}

//Validação: não deixa adicionar tarefa vazia
if (texto === "") {
    mensagem.textContent = "Escreva algo antes de adicionar."
    campo.focus();
    return;
}
mensagem.textContent = ""

//CRIAR elementos novos
const li = document.createElement("li");

const span = document.createElement("span");
span.textContent = texto; //textContent é seguro contra HTML malicioso