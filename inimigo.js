function criaInimigo(){
    //  Cria inimigo dentro do grupo inimigos
    var inimigo = inimigos.create(250, 250, 'bear');
    inimigo.enableBody = true;

    // Faz inimigos não fugirem do mundo
    //inimigo.body.collideWorldBounds = true;
}