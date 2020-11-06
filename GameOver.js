class GameOver extends Phaser.Scene
 {
 constructor()
 {
 super('game-over')
 }


 create() {
  
  const width = this.scale.width
  const height = this.scale.height

 //this.input.keyboard.once('keydown_SPACE', () => {this.scene.start('game')})

  this.add.image(width*0.5, height*0.5,'gameOver').setScale(0.4);

  const backgroundSound = this.sound.add('musica_fundo') 
  backgroundSound.setLoop(true);
  backgroundSound.play()
  backgroundSound.setVolume(0.050);
 //this.add.text(width * 0.5, height * 0.58, 'Press space to play again!',{fontSize: 18}).setOrigin(0.5)
  //this.add.text(width * 0.5, height * 0.63, 'Actual Score: '+ this.scoreRun,{fontSize: 18}).setOrigin(0.5)
 //this.add.text(width * 0.5, height * 0.68, 'Highscore: '+ this.finalScore,{fontSize: 18}).setOrigin(0.5)
 }
 }