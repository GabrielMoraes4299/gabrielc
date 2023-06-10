//criação da classe "Itens" que criará e controlará os itens do jogo
class Itens{
    constructor(){
      this.imagem = img_itens[int(random(0, 3.3))];
      this.posX = random(10, 560);
      this.posY = 40;
      this.vel = int(random(1,maximo));
      this.largura = 100;
      this.altura = 50;
    }
    
    //função que criará os itens e que fará eles se moverem de cima para baixo
    mova(){
      this.posY += this.vel;
      image(this.imagem, this.posX,this.posY,this.largura,this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }