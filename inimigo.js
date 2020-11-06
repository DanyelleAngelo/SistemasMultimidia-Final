function encostouInimigo(inimigo,player){
    this.physics.pause();
    inimigo.setTint(0xff0000);
    player.setTint(0xff0000);
    game.scene.start('game-over');
}

