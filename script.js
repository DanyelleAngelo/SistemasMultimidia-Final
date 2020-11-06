const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
    scene: [{
        preload: preload,
        create: create,
        update: update
    }, GameOver],
    //scale: {
    //  zoom: 2
    //}
    
};

const game = new Phaser.Game(config);
//const fireMission = new FireMission(game);

function update() {
    var player = this.player;
    var treeFireMission = this.treeFireMission;

    movements(this);

   
    
}

