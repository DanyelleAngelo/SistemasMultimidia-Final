/**
 * modularizar:colocar uma mesma funcao de coletar mareial para todas missoes
 * criar Mapa
 * criar inimigos e vida:https://www.paulotrentin.com.br/programacao/criando-jogos-com-html5-e-phaser/parte-3-adicionando-inimigo-ao-jogo/
 */
/**
 * Função que cria o inimigo
 */
function criaInimigo(){
    //  Cria inimigo dentro do grupo inimigos
    var inimigo = inimigos.create(150, 50, 'aligato');
 
    //  Define gravidade do inimigo
    inimigo.body.gravity.y = 100;
 
    // Faz inimigos não fugirem do mundo
    inimigo.body.collideWorldBounds = true;
}

//Função que faz inimigo se aproximar do jogador
function aproximaInimigo(){
    // Pega o primeiro elemento do grupo inimigos
    var inimigo = inimigos.children[0];
 
    // Faz com que ele fique parado
    inimigo.body.velocity.x = 0;
 
    // Se o inimigo está mais para esquerda do jogador
    if (inimigo.position.x < jogador.body.position.x){
        // faz ele ir para direita
        inimigo.body.velocity.x += 100;
    }else{
        // Senão, faz ele ir para esquerda
        inimigo.body.velocity.x -= 100;
    }
}

function collectingMaterial(game,progress,obj,goal,msgm){
    obj.on('pointerdown', function() {
        if(progress<goal/2){
             progress +=5;
            //TODO exibir barra de progress noo lugar de console.log
            console.log(msgm +" "+progress );
            if(progress == goal/2){
                //TODO colocaf isso na outra funcao
                buildCampfire(game,progress,goal) ;
            }
        }
    });
}
function buildCampfire(game,progress,goal){
    //TODO mudar para tercera galho,colcar vários
    //TDO fazer galhoo aparecer suavemete 
    var campfire = game.physics.add.sprite(config.width / 2, config.height / 2, 'elements').setImmovable().setInteractive();

    game.physics.add.collider(campfire, game.player);
    
    //TODO corrigir Movimentos
    game.player.body.velocity.x += 3000;
    alert("Clique nos galhos, para realizar fricÇão e obter fogo");
    
    //TODO usar a funcao de cima
    campfire.on('pointerdown', function() {
        if(progress<goal){
             progress +=5;
            //TODO exibir barra de progress noo lugar de console.log
            console.log("fogueira" +" "+progress );
            if(progress == goal){
                //TODO colocaf isso na outra funcao
                alert("sucess");
                //TODO criar um sprite que tenha tudo da fogueira (colocar varias fases)
                campfire.setTexture('elements',15);
            }
        }
    });
}

function fireMission(game){
    //TODO exibir mensagem na tela falando que o user achou uma árvore perfeita e instruir o usuário a clicar na tela até que seja coletado lenha
    var tree = game.treeFireMission;
    var progress= 0;
    var goal =100;
    alert("Clique a árvore repetidas vezes para obter galhos e folhas secas para fazer fogo");
    collectingMaterial(game,progress,tree,goal,"Progresso em obter lenha:");
}

function preload() {

    // inimigos
    this.load.image('aligato','assets/animals/Aligator.png');
   
    //fundos
    this.load.image('backgroundmap','assets/Mapas/MapaGrama.png');
    
    //elementos
    this.load.image('tree','assets/tree01.png');
    this.load.spritesheet('elements',"assets/itens/resources_basic.png",{ frameWidth:24, frameHeight:24 });

    //personagem
    //TODO arrumar tamanho da imagem
    this.load.spritesheet('player','assets/personagem/personagem.png', { frameWidth:46, frameHeight:48 })
    
}

function create() {
    /*add images */
     /*fundo*/
    this.add.image(350,300,'backgroundmap').setScale(2.0,2.0);
    var player = this.physics.add.sprite(config.width / 2, config.height / 2, 'player');

    player.setCollideWorldBounds(true); /*colisões*/
    
    /*Movimentos do personagem*/
    this.anims.create({
      key: 'stopped',
      frames: [{key:"player",frame:5}],
      framerate:20,
    });
    /*go*/
    this.anims.create({
      key:'goLeft',
      frames: this.anims.generateFrameNumbers('player',{start:3,end:4}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goRight',
      frames: this.anims.generateFrameNumbers('player',{start:1,end:2}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goUp',
      frames: this.anims.generateFrameNumbers('player',{start:0,end:0}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goDown',
      frames: this.anims.generateFrameNumbers('player',{start:5,end:5}),
      framerate:10,
      repeat: 1,
    });
    /*others objetos*/

    //Repete as arvores
    tree = this.physics.add.staticGroup({
    key: 'tree',
    repeat: 10,
    setXY: { x:12, y: 0, stepX: 70 }
    });
    this.physics.add.collider(tree, player);

     //Repete as arvores
    tree = this.physics.add.staticGroup({
    key: 'tree',
    repeat: 9,
    setXY: { x:10, y: 30, stepX: 80 }
    });
    this.physics.add.collider(tree, player);
  
    //essa árvore tem propriedades fisicas,pois pertence a missão do fogo
    var treeFireMission = this.physics.add.sprite(50, 100, 'tree').setImmovable();
    treeFireMission.setInteractive();
    this.treeFireMission = treeFireMission;

    /*colisões*/
    //TODO ver um jeito de adicionar várias colisões de ma só vez
    this.physics.add.collider(treeFireMission, player);
    this.player = player;

   // inimigos = game.add.group();
   inimigos = this.physics.add.group();
    this.physics.add.collider(player,inimigos);
    // Definimos aqui que qualquer inimigo terá um corpo,
    // ou seja, nosso personagem pode bater nele
    //inimigos.enableBody = true;
     // Chama função que cria inimigo
    criaInimigo();

    
    
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    var player = this.player;
    var treeFireMission = this.treeFireMission;

    /*go*/
    if(cursors.left.isDown){
      player.setVelocityX(-100);
      player.anims.play('goLeft', true);
    }else if(cursors.right.isDown){
      player.setVelocityX(100);
      player.anims.play('goRight', true);
    }else if(cursors.up.isDown){
      player.setVelocityY(-100);
      player.anims.play('goUp', true);
    }else if(cursors.down.isDown){
      player.setVelocityY(100);
      player.anims.play('goDown');
    }else{
      player.setVelocityX(0);
      player.setVelocityY(0);
      player.anims.play('stopped');
    }

    if (player.body.touching.left && treeFireMission.body.touching){
        fireMission(this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    backgroundColor: '#fff',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
