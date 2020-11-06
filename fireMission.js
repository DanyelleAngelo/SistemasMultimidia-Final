
function FireMission(game){
    this.game = game;
    this.player = game.player;
    this.tree = game.treeFireMission; 
    this.campfire = game.physics.add.sprite(config.width -200, config.height -120, 'campfire','campfire-32.png').setImmovable().setInteractive();
    this.goal = 100;
    this.incrementProgress = 5;
    this.progress = 0;
    this.steps = {
        "collectingMaterial":{"goal":this.goal/2,"msg":"UMMMMMMMMMM....essa árvore parece ótima, vamos começar por aqui, clique sobre ela para coletar os galhos e as folhas mais secas","obj":this.tree},
        "buildCampfire":{"goal":this.goal,"msg":"Ótimo trabalho, agora precisamos ascender essa fogueira clique nos galhos que você colheu repetidas para fazer fricção e ascender a fogueira. Cuidado para não se queimar! ",
        "obj":this.campfire},
    };
    
    this.campfire.setActive(false).setVisible(false);
    collectingMaterial(this)
}

function collectingMaterial(mission){

    step = mission.steps["collectingMaterial"];
    alert(step["msg"]);
    var tree = this.tree;
    step["obj"].on('pointerdown', function() {
        if(mission.progress<step["goal"]){
            mission.progress +=mission.incrementProgress;
            //alert("Progress: " +mission.progress );
        }
        if(mission.progress == step["goal"]){
            tree.setActive(false).setVisible(false);
            buildCampfire(mission);
        }
    });
}

function buildCampfire(mission){
        step = mission.steps["buildCampfire"];
        alert(step["msg"]);
        var campfire = this.campfire;
        campfire.setActive(true).setVisible(true);
        mission.game.physics.add.collider(mission.campfire, mission.game.player);

        //TODO corrigir Movimentos
        mission.game.player.body.velocity.x += 3000;
        step["obj"].on('pointerdown', function() {
            if(mission.progress<step["goal"]){
                mission.progress +=mission.incrementProgress;
                //alert("Progress: " +mission.progress );
            }
            if(mission.progress == step["goal"]){
                campfire.destroy();
                mission.game.physics.add.sprite(config.width -200, config.height -120, 'campfire','campfire-19.png').setImmovable().setInteractive();
                mission.game.scene.start('game-over');
                //this.add.text(width * 0.5, height * 0.4, 'Game Over', {fontSize: 48, fontWeight: 'bold'}).setOrigin(0.5)
                //this.scoreLabel = this.add.text(70, 40, 'Score: 0', style).setScrollFactor(0).setOrigin(0.5, 0);
                //this.scoreLabel.align = 'left';
                alert("Success");
                //this.add.text(70,40, 'Success',{fontSize: 24}).setOrigin(0.0).setScrollFactor(0);
                
            }
        });


        //exemplo:
       //this.campfire.setTexture('campfire-19.png');

        //this.campfire.setTexture('campfire','campfire-30.png');
        //this.physics.add.sprite(x,y,'campfire','campfire-20.png');
}