// Create Phaser game object
let game = new Phaser.Game(640, 360, Phaser.AUTO); // auto selects WebGl or canvas
// give game a state (where all game code goes)
let GameState = {
    // preload game assets
    preload: function(){    
        // this.load refers to the Loader object
        this.load.image('background','assets/images/background.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('horse', 'assets/images/horse.png');
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('sheep', 'assets/images/sheep3.png');
        this.load.image('arrow', 'assets/images/arrow.png');
    },
    // executes after everything is loaded
    create: function(){
        // this.scale refers to the Scale Manager
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
//        
//        // set screen size automatically
//        this.scale.setScreenSize(true);
        
        // to show an image, we create a new sprite
        // we add 'this' at the beginning so that we can use the image in other methods
        // this.game refers to the main Game object
        this.background = this.game.add.sprite(0, 0, 'background');
        // this.game.world gives us the World object and we can access its center
        this.pig = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'pig');
        this.pig.anchor.setTo(0.5);
        
        this.pig.inputEnabled = true;
        this.pig.input.pixelPerfect = true;
        this.pig.events.onInputDown.add(this.animateAnimal, this);
        
        // right arrow
        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.rightArrow.anchor.setTo(0.5);
        // we create customParams to store our settings
        // we'll use direction to determine how to move animals
        this.rightArrow.customParams = { direction: 1 };
        
        this.rightArrow.inputEnabled = true;
        this.rightArrow.input.pixelPerfectClick = true;
        this.rightArrow.events.onInputDown.add(this.switchAnimal, this);
        
        // left arrow
        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.x = -1;
        // we create customParams to store our settings
        // we'll use direction to determine how to move animals
        this.leftArrow.customParams = { direction: -1 };
        
        // enable input on left arrow
        this.leftArrow.inputEnabled = true;
        // use pixel perfect detection
        this.leftArrow.input.pixelPerfectClick = true;
        // touch or click event. We should pass the current object as well.
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
       
    },
    update: function(){
        
    },
    switchAnimal: function(sprite, event) {
        console.log("arrow clicked");
    },
    animateAnimal: function(sprite, event) {
        console.log("animate animal");
    }
};

// assign state to our game
game.state.add('GameState', GameState);

// fire up state to begin the game
game.state.start('GameState');