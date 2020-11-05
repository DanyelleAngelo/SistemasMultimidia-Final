function FireMission(game){
    this.game = game;
    this.tree = game.treeFireMission; 
    this.campfire = game.physics.add.sprite(config.width -200, config.height -120, 'campfire','campfire-32.png').setImmovable().setInteractive();
    this.goal = 100;
    this.incrementProgress = 5;
    this.progress = 0;
    this.steps = {
        "collectingMaterial":{"goal":this.goal/2,"msg":"UMMMMMMMMMM....essa árvore parece ótima, vamos começar por aqui, clique sobre ela para coletar os galhos e as folhas mais secas","obj":this.tree},
        "buildCampfire":{"goal":this.goal,"msg":"clique nos galhos. colocar explicacao",
        "obj":this.campfire},
    };
    
    this.campfire.setActive(false).setVisible(false);

    collectingMaterial(this);
}

function collectingMaterial(mission){

    step = mission.steps["collectingMaterial"];
    console.log(step["msg"]);
    
    step["obj"].on('pointerdown', function() {
        if(mission.progress<step["goal"]){
            mission.progress +=mission.incrementProgress;
            console.log("Progress: " +mission.progress );
        }
        if(mission.progress == step["goal"]){
            buildCampfire(mission);
        }
    });
}

function buildCampfire(mission){
        step = mission.steps["buildCampfire"];
        console.log(step["msg"]);
        var campfire = this.campfire;
        campfire.setActive(true).setVisible(true);
        mission.game.physics.add.collider(mission.campfire, mission.game.player);

        //TODO corrigir Movimentos
        mission.game.player.body.velocity.x += 3000;
        step["obj"].on('pointerdown', function() {
            if(mission.progress<step["goal"]){
                mission.progress +=mission.incrementProgress;
                console.log("Progress: " +mission.progress );
            }
            if(mission.progress == step["goal"]){
                campfire.destroy();
                mission.game.physics.add.sprite(config.width -200, config.height -120, 'campfire','campfire-19.png').setImmovable().setInteractive();
                console.log("Sucess");
            }
        });


        //exemplo:
       //this.campfire.setTexture('campfire-19.png');

        //this.campfire.setTexture('campfire','campfire-30.png');
        //this.physics.add.sprite(x,y,'campfire','campfire-20.png');
}