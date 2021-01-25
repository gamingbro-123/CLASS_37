class Form
{
    constructor()
    {
        this.input = createInput("NAME");

        this.button = createButton("CLICK ME");

        this.greeting = createElement('h3');

        this.title = createElement('h2');

    }

    display()
    {
       
       this.title.html("car Racing Game");
       this.title.position(130,0);

      
       this.input.position(130,160);
           
      
       this.button.position(250,200);
       this.button.mousePressed(()=>{
          this.input.hide();
           this.button.hide();

          var myname = this.input.value();

           
           this.greeting.html("Hello " + myname);
           this.greeting.position(130,160);
           playerCount = playerCount+1;

           player.name = myname;
           player.index = playerCount;

           player.updateCount(playerCount)
           player.update();
           

           

       })

    }

    hideForm()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();


    }
}