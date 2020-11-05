function preload() {
    this.load.image('tiles', 'assets/tilesets/gentle forest,jungle palette.png');
    this.load.image('trees','assets/tilesets/treeWall/treeWall.png');
    this.load.tilemapTiledJSON('forest','assets/tilesets/MapForest.json');
    this.load.atlas("campfire","assets/campfire/campfire.png","assets/campfire/campfire.json");

    // inimigos
    this.load.image('aligato','assets/animals/Aligator.png');
     this.load.atlas("bear", "assets/inimigos/bear.png","assets/inimigos/bear.json");

    //fundos
    this.load.image('backgroundmap','assets/Mapas/MapaGrama.png');
    
    //elementos
    this.load.image('tree','assets/tree01.png');
    this.load.spritesheet('campfire',"assets/campfire.png",{ frameWidth:36, frameHeight:36});

    //personagem
    //TODO arrumar tamanho da imagem
    this.load.spritesheet('player','assets/personagem/personagem.png', { frameWidth:46, frameHeight:48 })
    
}

function create() {
    /*add images */
     /*fundo*/
    //this.add.image(400,300,'backgroundmap').setScale(2.0,2.0);
    
    const map = this.make.tilemap({key:'forest'});
    const tileset1 = map.addTilesetImage('Forest', 'tiles');
    const tileset2 = map.addTilesetImage('treeWall','trees');

    const groundLayer = map.createStaticLayer('Ground', tileset1);
    const wallsLayer = map.createStaticLayer('Walls',tileset2);
        
    groundLayer.setCollisionByProperty({ collides: true});
    wallsLayer.setCollisionByProperty({collides: true});


    var player = this.physics.add.sprite(config.width / 2, config.height / 2, 'player');
    //player.setCollideWorldBounds(true); /*colisões*/
    
    /*Movimentos do personagem*/
    this.anims.create({
      key: 'stopped',
      frames: [{key:"player",frame:1}],
      framerate:20,
    });
    /*go*/
    this.anims.create({
      key:'goLeft',
      frames: this.anims.generateFrameNumbers('player',{start:3,end:5}),
      framerate:3,
      repeat: -1,
    });

    this.anims.create({
      key:'goRight',
      frames: this.anims.generateFrameNumbers('player',{start:6,end:8}),
      framerate:3,
      repeat: -1,
    });

    this.anims.create({
      key:'goUp',
      frames: this.anims.generateFrameNumbers('player',{start:9,end:11}),
      framerate:3,
      repeat: -1,
    });

    this.anims.create({
      key:'goDown',
      frames: this.anims.generateFrameNumbers('player',{start:0,end:2}),
      framerate:3,
      repeat: 1,
    });
    this.anims.create({
          key: "brown-idle-down",
          frames: [{ key: 'bear', frame: 'brown-down-1.png'}]
      })
      this.anims.create({
          key: "brown-idle-up",
          frames: [{ key: 'bear', frame: 'brown-up-1.png'}]
      })
      this.anims.create({
          key: "brown-idle-left",
          frames: [{ key: 'bear', frame: 'brown-left-1.png'}]
      })
      this.anims.create({
          key: "brown-idle-right",
          frames: [{ key: 'bear', frame: 'brown-right-1.png'}]
      })
      this.anims.create({
         key: "brown-run-down",
          frames: this.anims.generateFrameNames('bear', {start: 0, end: 2, prefix: "brown-down-", suffix: ".png"}),
          repeat: -1,
          frameRate: 10
       });
        this.anims.create({
         key: "brown-run-up",
          frames: this.anims.generateFrameNames('bear', {start: 0, end: 2, prefix: "brown-up-", suffix: ".png"}),
          repeat: -1,
          frameRate: 10
       });
        this.anims.create({
         key: "brown-run-left",
          frames: this.anims.generateFrameNames('bear', {start: 0, end: 2, prefix: "brown-left-", suffix: ".png"}),
          repeat: -1,
          frameRate: 10
       });
        this.anims.create({
         key: "brown-run-right",
          frames: this.anims.generateFrameNames('bear', {start: 0, end: 2, prefix: "brown-right-", suffix: ".png"}),
          repeat: -1,
          frameRate: 10
       });
      
      const bear = this.physics.add.sprite(256,128,'bear','brown-up-1');
    //camera
    this.cameras.main.startFollow(player, true);
    this.cameras.main.setBounds(0,0,800,800);
      //------------------

    /*others objetos*/
    
    //essa árvore tem propriedades fisicas,pois pertence a missão do fogo
    var treeFireMission = this.physics.add.sprite(720, 570, 'tree').setImmovable();
    treeFireMission.setInteractive();
    this.treeFireMission = treeFireMission;

    /*colisões*/
    //TODO ver um jeito de adicionar várias colisões de ma só vez
    //this.physics.add.collider(tree, player);
    this.physics.add.collider(player,treeFireMission,FireMission(this));
    this.player = player;

    inimigos = this.physics.add.group();
    this.physics.add.collider(player,inimigos);
    this.physics.add.collider(player,wallsLayer);
    this.physics.add.collider(player,groundLayer);
    criaInimigo();
}
