class GameStart extends Phaser.Scene
 {
 constructor()
 {
 super('game-start')
 }

 preload() {

   this.load.image('inicio', 'assets/Fundo_Jogo.png')
   this.load.audio('musica_fundo', ['assets/audio/backgroundsound.mp3'])

 }

 create() {
  const width = this.scale.width;
  const height = this.scale.height;
 
  this.add.image(width*0.5, height*0.5,'inicio');

  const backgroundSound = this.sound.add('musica_fundo') ;
  backgroundSound.setLoop(true);
  backgroundSound.play();
  backgroundSound.setVolume(0.025);

  this.input.keyboard.once('keydown_SPACE', () => {this.scene.start({preload: preload,
        create: create,
        update: update})})

 }
 }