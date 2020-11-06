class GameStart extends Phaser.Scene
 {
 constructor()
 {
 super('game-start')
 }

 preload() {
   
    /*Fundo,árvores,rios */
    this.load.image('tiles', 'assets/tilesets/gentle forest,jungle palette.png');
    this.load.image('trees','assets/tilesets/treeWall/treeWall.png');
    this.load.tilemapTiledJSON('forest','assets/tilesets/MapForest.json');
    this.load.image('gameOver','assets/Game-Over.png');
    this.load.audio('musica_fundo', ['assets/audio/backgroundsound.mp3'])
    this.load.image('inicio','assets/Fundo-Jogo.png');
    // inimigos
    this.load.image('aligato','assets/animals/Aligator.png');
     this.load.atlas("bear", "assets/inimigos/bear.png","assets/inimigos/bear.json");
  
    //elementos
    this.load.image('vida','assets/icons/vidas.png')
    this.load.image('container','assets/container.png');
    this.load.image('tree','assets/tree01.png');
    this.load.atlas("campfire","assets/campfire/campfire.png","assets/campfire/campfire.json");
    this.load.image('closeButton','assets/icons/close.png');

    //personagem
    this.load.spritesheet('player','assets/personagem/personagem.png', { frameWidth:46, frameHeight:48 })
 }

 create() {
  const width = this.scale.width;
  const height = this.scale.height;
 
  this.add.image(width*0.5, height*0.5,'inicio').setScale(0.4);

  const backgroundSound = this.sound.add('musica_fundo') 
  backgroundSound.setLoop(true);
  backgroundSound.play()
  backgroundSound.setVolume(0.050);

  this.input.keyboard.once('keydown_SPACE', () => {this.scene.start()})

 }
 }