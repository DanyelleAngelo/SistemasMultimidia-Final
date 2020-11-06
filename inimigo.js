function encostouInimigo(inimigo,player){
    this.physics.pause();
    inimigo.setTint(0xff0000);
    player.setTint(0xff0000);
    game.scene.start('game-over');
}

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