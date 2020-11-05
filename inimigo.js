function criaInimigo(){
    //  Cria inimigo dentro do grupo inimigos
    //var inimigo = inimigos.create(250, 250, 'bear');
    //inimigo.enableBody = true;

    // Faz inimigos não fugirem do mundo
    //inimigo.body.collideWorldBounds = true;
}
 /*  Função que faz inimigo se aproximar do jogador */
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
 /*  Função que mata o jogador e informa que ele morreu*/
function encostouInimigo (jogador, inimigo) {
    // Remove jogador do jogo
    jogador.kill();
 
    // Mostra texto informando morte do jogador
    var textoJogo = game.add.text(game.camera.width / 2 - 150, game.camera.height / 2, "Você morreu", {
        font: "48px Arial",
        fill: "#ff0044",
        align: "center"
    });
}
