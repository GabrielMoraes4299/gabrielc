function executarJogo(){
  //declara a variável fundo_bob como plano de fundo
  background(fundo_bob);
    
  //executa a função mova na variável bob_esponja
  bob_esponja.mova();

  //inicia um for que aplica a função mova em todos os itens
  for(let i = 0; i < itens.length; i++){
    itens[i].mova();
    //condição que faz os itens voltarem para cima
    if(itens[i].posY > 400){
    itens[i] = new Itens(itens[i].posX)
    }
    //condição que detecta o toque entre o jogador e os itens
    if(bob_esponja.xInicial < itens[i].xFinal &&
      bob_esponja.xFinal > itens[i].xInicial &&
      bob_esponja.yInicial < itens[i].yFinal &&
      bob_esponja.yFinal > itens[i].yInicial){

      //condição que verifica se o item tocado pelo jogador é a água viva
      if(itens[i].imagem == img_itens[3]){
        pontos = 0;
        itens[i] = new Itens();
        maximo = 5;
        choque.play();
        vidas -= 1;
        if(vidas == 0){
        cont_tela = "GAMEOVER";
        }
      }
      //condição para se o item não for uma água viva
      else{
      itens[i] = new Itens();
      pontos += 1;
      maximo += 0.5;
      dinheiro.play();
  }

  }
  //código que mostra os pontos na tela e controla o tamanho do texto da tela
  textSize(20);
  text('Pontos :' + pontos, 30, 25);
  text('Vidas :' + vidas, 500, 25);
  }
}