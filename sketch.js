//criação de uma variável para o jogador
var bob_esponja;
//criação da variável que armazena a imagem do plano de fundo
var fundo_bob;
//criação da variável que armazena as imagens dos itens
var img_itens = [];
//criação da variável que armazena os itens
var itens = [];
//criação da variável que armazena o valor máximo do random de velocidade
var maximo = 5;
//criação da variável que armazena o som de choque
var choque;
//criação da variável que armazena o som de dinheiro
var dinheiro;
//criação da variável que armazena os pontos
var pontos = 0;
//criação da variável que armazena a tela de abertura
var telaAbertura;
//criação da variável que armazena a tela de game over
var fim;

var vidas = 3;

var cont_tela = "INICIO";
//função que é ativada no pré carregamento do jogo e que carrega as imagens e as classes nas suas determinadas variáveis
function preload() {
  bob_esponja = new Jogador();

  choque = loadSound('./JOGO/SONS/Shock.mp3');
  
  dinheiro = loadSound('./JOGO/SONS/Cash.mp3');
  
  fundo_bob = loadImage('./JOGO/IMG_JOGO/fundo_bob.jpg');

  telaAbertura = loadImage('./JOGO/IMG_JOGO/inicio.gif');

  fim = loadImage('./JOGO/IMG_JOGO/gameover.gif');

  img_itens[0] = loadImage('./JOGO/IMG_JOGO/hamburguer_siri.png')
  img_itens[1] = loadImage('./JOGO/IMG_JOGO/copo.png')
  img_itens[2] = loadImage('./JOGO/IMG_JOGO/fritas.png')
  img_itens[3] = loadImage('./JOGO/IMG_JOGO/agua_viva.png')
  
  
  itens[0] = new Itens();
  itens[1] = new Itens();
  itens[2] = new Itens();
  itens[3] = new Itens();
}

//função que "prepara o terreno" para o início do jogo
function setup() {
  //cria um canvas de 600 por 400
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if (keyCode == 13) {
    cont_tela = "JOGO";
  }
  if (keyCode == 32) {
    cont_tela = "INICIO";
  }
}
//função que desenha o que é pedido
function draw() {
  if (cont_tela == "INICIO") {
    Abertura();
  }
  else{
    if (cont_tela == "JOGO") {
      executarJogo();
    }
  if(cont_tela == "GAMEOVER"){
    gameover();
    }
    if (cont_tela == "INICIO") {
      Abertura();
    }
}
}