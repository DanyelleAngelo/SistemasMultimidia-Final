class GameOver extends Phaser.Scene{
 constructor()
 {
 super('game-over')
 }

 create() {
  
 const width = this.scale.width
 const height = this.scale.height

 this.input.keyboard.once('keydown_SPACE', () => {this.scene.start({
   preload: preload,
    create: create,
    update: update})})

 this.add.text(width * 0.5, height * 0.4, 'Game Over', {fontSize: 48, fontWeight: 'bold'}).setOrigin(0.5)
 this.add.text(width * 0.5, height * 0.58, 'Press space to play again!',{fontSize: 18}).setOrigin(0.5)
 
 }
 }