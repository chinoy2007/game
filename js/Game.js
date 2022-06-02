class Game {
  constructor() {
    this.resettile= createElement("h2");
    this.resetbtn= createButton("");

    this.serveBallbtn= createButton("");
    this.serveBallTitle= createElement("h2");

    // ball.velocityX=0;
    // ball.velocityY=0;
  }


  getState(){
    var gameStateRef= database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState= data.val()
    });
  }

  update(state){
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
   
    player = new Player();

    playerCount= player.getCount();
    form = new Form();
    form.display();

    //player.mousePressed();

    player1= createSprite(width/2+700,height-500);
    player1.addImage("playerone",player_left1);
    player1.scale=0.9;

    player2= createSprite(width/2-700,height-500);
    player2.addImage("playertwo",player_left2);
    player2.scale=0.5;

    players=[player1,player2];

    ball= createSprite(width/2-650,height/2-250);
    ball.addImage("ballImage",ballImg);
    ball.scale=0.06;
    
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
    this.resettile.html("Reset the Game");
    this.resettile.class("resetText");
    this.resettile.position(width/2+500, height/2-350);
    this.resetbtn.class("resetButton");
    this.resetbtn.position(width/2+550, height/2-400);

    this.serveBallTitle.html("Reset the Game");
    this.serveBallTitle.class("serveText");
    this.serveBallTitle.position(width/2+500, height/2+350);
    this.serveBallbtn.class("serveButton");
    this.serveBallbtn.position(width/2-550, height/2-400);
  }

  play() {
    this.handleElements();
    this.handleResetGame();
    this.handleServeBall();
   

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
     // console.log(courtImg.positionX);
      image(courtImg, 0 ,0,width,height);

     // this.handlePlayerControls();
      // this.showRank();
      // this.gameOver();
      drawSprites();
    }
  }

  // handlePlayerControls(){
   
  //   // player.positionY= mouseY
  //   // player.update();

  //   if(keyIsDown("UP_ARROW")){
  //     player.positionY+=5;
  //     console.log(player.positionY);
  //     player.update();
  //   }
  //   }

    handleResetGame(){
      this.resetbtn.mousePressed(()=>{
        database.ref("/").set({
          playerCount:0,
          gameState:0,
          players:{},
        });
        window.location.reload();
      })
    }

    handleServeBall(){
      this.serveBallbtn.mousePressed(()=>{
        //database.ref("/").set({
          ball.velocityX=0;
          ball.velocityY=0
        
        });
        window.location.reload();
     // })
    }
    
      
    

  //   showRank() {
  //   swal({
  //     title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
  //     text: "You won the match!",
  //     imageUrl:
  //       "https://i.pinimg.com/originals/76/cc/ff/76ccff3ed21f4e4b2cc4f6e4d47e4a6d.png",
  //     imageSize: "200x200",
  //     confirmButtonText: "Ok"
  //   });
  // }

  //   gameOver() {
  //     swal({
  //       title: `Game Over`,
  //       text: "The opponent has won the match..",
  //       imageUrl:
  //         "https://i.pinimg.com/originals/bf/ac/33/bfac33b6a33643e889864d273e566f4e.png",
  //       imageSize: "200x200",
  //       confirmButtonText: "Thanks For Playing"
  //     });
  //   }
   
  //  handleServeball(){
  //   ball.velocityX=4;
  //   ball.velocityY=2;
  // }
   
 }
