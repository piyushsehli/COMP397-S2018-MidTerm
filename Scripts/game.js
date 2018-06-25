//Name: Piyush Sehli
//Student Number: 300984528
//Date: 25 June, 2018

let app;
(function(app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let helloLabel;
  let diceOne;
  let diceTwo;
  let labelOne;
  let labelTwo;
  let assetManager;
  let startButton;
    
  let manifest = [
      { id: "one", src: "/Assets/images/1.png" }, 
      { id: "two", src: "/Assets/images/2.png" }, 
      { id: "three", src: "/Assets/images/3.png" }, 
      { id: "four", src: "/Assets/images/4.png" },
      { id: "five", src: "/Assets/images/5.png" },
      { id: "six", src: "/Assets/images/6.png" },
      { id: "blank", src: "/Assets/images/blank.png" },
      { id: "StartButton", src: "/Assets/images/StartButton.png" }
    ];

  function Init() {
      console.log("App Initializing...");
      assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);
  }


  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {
    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    Main();
  }

  function imgRandom() {
        return Math.floor(Math.random() * 6)+1;
    }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
    console.log("Main Function...");


    /*addDiceScore(" ", 200, 280);
    addDiceScore(" ", 450, 280);*/
    labelOne = new createjs.Text(" ", "25px Consolas", "#000000");
      labelOne.regX = labelOne.getBounds().width * 0.5;
      labelOne.regY = labelOne.getBounds().height * 0.5;
      labelOne.x = 200;
      labelOne.y = 280;
      stage.addChild(labelOne);

      labelTwo = new createjs.Text(" ", "25px Consolas", "#000000");
      labelTwo.regX = labelTwo.getBounds().width * 0.5;
      labelTwo.regY = labelTwo.getBounds().height * 0.5;
      labelTwo.x = 450;
      labelTwo.y = 280;
      stage.addChild(labelTwo);

       diceOne = new createjs.Bitmap(assetManager.getResult("blank"));
      diceOne.regX = diceOne.getBounds().width * 0.5;
      diceOne.regY = diceOne.getBounds().height * 0.5;
      diceOne.x = 200;
      diceOne.y = 170;
      stage.addChild(diceOne);

       diceTwo = new createjs.Bitmap(assetManager.getResult("blank"));
      diceTwo.regX = diceTwo.getBounds().width * 0.5;
      diceTwo.regY = diceTwo.getBounds().height * 0.5;
      diceTwo.x = 450;
      diceTwo.y = 170;
      stage.addChild(diceTwo);


      // start button
      startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
      startButton.regX = startButton.getBounds().width * 0.5;
      startButton.regY = startButton.getBounds().height * 0.5;
      startButton.x = 320;
      startButton.y = 330;
      stage.addChild(startButton);




    // start button listeners
    startButton.addEventListener("click", function() {

        console.log("Start Button Clicked");
        var imgIndex = imgRandom(); 
        var imgIndex2 = imgRandom(); 

        var getNumeric1=getImages(imgIndex);
        var getNumeric2=getImages(imgIndex2);
          
          diceOne.image=assetManager.getResult(getNumeric1);
 labelOne.text = imgIndex;
  diceTwo.image=assetManager.getResult(getNumeric2);
  labelTwo.text = imgIndex2;

    });

   
    function getImages(imgIndex){
      var tmp="";
      switch(imgIndex){
          case 1:
            tmp="one";
            break;

          case 2:
            tmp="two";

            break;

          case 3: 
            tmp="three";
             break;

          case 4:
            tmp="four";
            break;

          case 5:
            tmp="five";
            break;

          case 6:
            tmp="six";

            break;
        }
        return tmp;
    }

   
    startButton.addEventListener("mouseover", function(event) {
        event.currentTarget.alpha = 0.7;
    });

    startButton.addEventListener("mouseout", function(event) {
        event.currentTarget.alpha = 1.0;
    });
  }

  window.addEventListener("load", Init);
})(app | (app = {}));
