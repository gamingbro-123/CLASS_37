class Game
{
    constructor()
    {
       
    }
  
    getState()
    {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data){
        gameState = data.val();
      });
    }
   update(state)
   {
     database.ref("/").update({gameState : state});
   }
  start()
  {
      if(gameState===0)
      {
          player = new Player();
          player.getCount();
         form = new Form();
         form.display();

      }

  }

  play()
      {
        form.hideForm();
        textSize(30);
        text("Game Started",120,100);

        Player.getPlayerInfo();
        var textYPosition = 130
        if(allPlayers!== undefined)
        {
          for(var slayer in allPlayers)
          {
            textSize(15);
            if(slayer === "player" + player.index )
           fill("red")
           else 
           fill("black")
           
            text(allPlayers[slayer].name + " : " + allPlayers[slayer].distance, 120,textYPosition);
            textYPosition = textYPosition +20;
            
          }
        }

        if(keyIsDown(UP_ARROW)&& player.index!==null)
        {
          player.distance = player.distance+50;
          player.update();
         // player.distance +=50;
        }
      
      }

    
  
  
}