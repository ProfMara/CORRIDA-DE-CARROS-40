class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {

    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //código para criar as sprites dos carros e colocá-los na matriz

    var carro1 = createSprite(width/2 - 100, height - 100);
    carro1.addImage(carroimg1);
    carro1.scale = 0.07;

    var carro2 = createSprite(width/2 + 100, height - 100);
    carro2.addImage(carroimg2);
    carro2.scale = 0.07;

    carros = [carro1, carro2];

    //grupo sprite
    moedaGrupo = new Group()

  }
  //função que adiciona as sprites no jogo em posições aleatórias


  play(){
    this.handleElements();

    //chamar função para pegar informações dos jogadores do banco de dados
    Player.pegarInfo();

    //verificar se os players são diferentes de indefinido
    if(allPlayers !== undefined){
      image(estradaimg, 0, -height*5, width, height*6 )
      //criar a variável i
      var i = 0;
      //usar o for para percorrer a matriz
       for(var plr in allPlayers){
        //incrementar o valor de i
        i++;
        //guardar a posição do banco de dados no eixo x e no eixo y em variáveis
        var x = allPlayers[plr].posX;
        var y = height - allPlayers[plr].posY;
        //usá-las para definir as posições das sprites dos carros da matriz carro
        carros[i-1].position.x = x;
        carros[i-1].position.y = y;

        
       //se o i tiver o mesmo valor do indice do player, fazer a câmera acompanhá-lo
        
        
    }
    //código para desenhar as sprites e controlar o carro
    
    drawSprites();
   
  }

  


     
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //fazer função para controlar o carro e atualizar o novo valor no banco de dados
  
  
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }

  //função para controlar os carros
  
}
