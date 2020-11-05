function movements(game){
    let cursors = game.input.keyboard.createCursorKeys();
    
    /*go*/
    if(cursors.left.isDown){
      game.player.setVelocity(-150,0);
      game.player.anims.play('goLeft', true);
    }else if(cursors.right.isDown){
      game.player.setVelocity(150,0);
      game.player.anims.play('goRight', true);
    }else if(cursors.up.isDown){
      game.player.setVelocity(0,-150);
      game.player.anims.play('goUp', true);
    }else if(cursors.down.isDown){
      game.player.setVelocity(0,150);
      game.player.anims.play('goDown',true);
    }else{
      game.player.setVelocityX(0);
      game.player.setVelocityY(0);
      game.player.anims.play('stopped');
    }

   // game.bear.anims.play("brown-run-down");
   if (game.hit > 0){
     return
   }
}