//criação da classe "Bob" que criará e controlará o Jogador
class Jogador{
  
    //função que cria o jogador, indicando sua posição, tamanho, e aparência
    constructor(){
      this.imagem = loadImage('./JOGO/IMG_JOGO/bob_esponja_direita.png');
      this.posX = 300;
      this.posY = 275;
      this.vel = 15;
      this.largura = 125;
      this.altura = 125;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    
    //fução que controla o player pelas setas e faz ele aparecer no canvas
    mova(){
      image(this.imagem, this.posX,this.posY,this.largura,this.altura);
      
        
      if((keyIsDown(37)) && (bob_esponja.posX > 5)){
        this.posX -= this.vel; 
      }
      
        
      if((keyIsDown(39)) && (bob_esponja.posX < 500)){
        this.posX += this.vel;
      }
      
      
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }