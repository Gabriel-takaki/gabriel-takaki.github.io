let botao = document.getElementById("criar-tarefa");
botao.addEventListener("click", criaTarefa);
function criaTarefa() {
  let lista = document.getElementById("lista-tarefas");
  let input = document.getElementById("texto-tarefa");
  let textoTarefa = input.value;
  lista.appendChild(document.createElement("li")).innerText = textoTarefa;
  document.querySelector("#texto-tarefa").value = "";
  for (i = 0; i < document.querySelectorAll("li").length; i++) {
    let tarefasLista = document.querySelectorAll("li")[i];
    tarefasLista.addEventListener("click", mudaCor);
    tarefasLista.addEventListener("dblclick", riscaItem);
  }
}

function mudaCor(event) {
  let tarefasLista = document.querySelectorAll("li");
  for (i = 0; i < tarefasLista.length; i++)
    if (tarefasLista[i].style.backgroundColor == "rgb(128, 128, 128)") {
      tarefasLista[i].style.backgroundColor = "";
      tarefasLista[i].className = "";
    }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
  event.target.className = "selected";
}

function riscaItem(evento) {
  let tarefasLista = document.querySelectorAll("li");
  if (evento.target.style.textDecoration != "line-through") {
    evento.target.style.textDecoration = "line-through";
    evento.target.className = "completed";
  } else {
    evento.target.style.textDecoration = "none";
    evento.target.className = "";
  }
}

const botaoApagaTudo = document.querySelector("#apaga-tudo");
botaoApagaTudo.addEventListener("click", cleanAll);
function cleanAll() {
  let listas = document.querySelectorAll("li");
  for (i = 0; i < listas.length; i++) {
    listas[i].remove();
  }
}

const botaoApagaFinalizados = document.querySelector("#remover-finalizados");
botaoApagaFinalizados.addEventListener("click", removeFinalizados);
function removeFinalizados() {
  let listas = document.querySelectorAll("li");
  for (i = 0; i < listas.length; i++) {
    if (listas[i].style.textDecoration == "line-through") {
      listas[i].remove();
    }
  }
}
const botaoEnvia = document.querySelector(".botaoEnvia");
botaoEnvia.addEventListener("click", envia);
function envia() {
  let materiaSelecionada = (document.querySelector("#materiaExerc").value = "");
  let quantidadeQuestoes = (document.querySelector("#qtdQuestões").value = "");
  let tempoEsperado = (document.querySelector("#tempo").value = "");
}

const botaoArquiva = document.querySelector("#arquiva");
botaoArquiva.addEventListener("click", arquiva);
function arquiva() {
  document.querySelector("#tempoDemandado").value = "";
  document.querySelector("#quantidadeAcertos").value = "";
}

function criaData() {
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, "0");
  var mes = String(data.getMonth() + 1).padStart(2, "0");
  var ano = data.getFullYear();
  var dataAtual = dia + "/" + mes + "/" + ano;

  let data2 = document.querySelector("#funcionamento");
  data2.document.createElement(input).value = dataAtual;
}

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio() {
  control = setInterval(cronometro, 10);
  document.getElementById("inicio").disabled = true;
  document.getElementById("parar").disabled = false;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = false;
}
function parar() {
  clearInterval(control);
  document.getElementById("parar").disabled = true;
  document.getElementById("continuar").disabled = false;
}
function reinicio() {
  clearInterval(control);
  centesimas = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;
  Centesimas.innerHTML = ":00";
  Segundos.innerHTML = ":00";
  Minutos.innerHTML = ":00";
  Horas.innerHTML = "00";
  document.getElementById("inicio").disabled = false;
  document.getElementById("parar").disabled = true;
  document.getElementById("continuar").disabled = true;
  document.getElementById("reinicio").disabled = true;
}
function cronometro() {
  if (centesimas < 99) {
    centesimas++;
    if (centesimas < 10) {
      centesimas = "0" + centesimas;
    }
    Centesimas.innerHTML = ":" + centesimas;
  }
  if (centesimas == 99) {
    centesimas = -1;
  }
  if (centesimas == 0) {
    segundos++;
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    Segundos.innerHTML = ":" + segundos;
  }
  if (segundos == 59) {
    segundos = -1;
  }
  if (centesimas == 0 && segundos == 0) {
    minutos++;
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    Minutos.innerHTML = ":" + minutos;
  }
  if (minutos == 59) {
    minutos = -1;
  }
  if (centesimas == 0 && segundos == 0 && minutos == 0) {
    horas++;
    if (horas < 10) {
      horas = "0" + horas;
    }
    Horas.innerHTML = horas;
  }
}
function mudaColor() {
  var corDeFundo = document.querySelector(".gradient").style;
  if (corDeFundo.background == "#eeeeee") {
    corDeFundo.color = "black";
  }
}
