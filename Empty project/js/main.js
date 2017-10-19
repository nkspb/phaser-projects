// Create Phaser game object
let game = new Phaser.Game(640, 360, Phaser.AUTO); // auto selects WebGl or canvas
// give game a state (where all game code goes)
let GameState = {
    preload: function(){
        
    },
    create: function(){
        
    },
    update: function(){
        
    }
};

// assign state to our game
game.state.add('GameState', GameState);

// fire up state to begin the game
game.state.start('GameState');