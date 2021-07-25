class Scene2 extends Phaser.Scene { 

    constructor ()
    {
        super({ key: 'scene2' });
    }
    
    preload ()
    {    
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('sky', 'assets/sky.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('reset', 'assets/reset.png');
        this.load.image('menu', 'assets/menu.png');
        this.load.image('star', 'assets/star.png');
        this.load.spritesheet('switch', 'assets/switch.png', { frameWidth: 256, frameHeight: 136 });
         
    }
    
    create ()
    {
        cantStars = 2;
        yo = this;
        posX = initPosX;
        posY = initPosY;      
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');

        //colision con el mundo
        sprite.setBounce(0.2);
        sprite.setCollideWorldBounds(true);
        //sprite.depth = 100; con depth pongo delante al sprite para que la estrella no lo tape.

        setStarsRandom();

        createAnimationDude();        

        createButtonsGame();
        
        playButton.on('pointerdown', function(){                       
            playConfig();                    
        });

        resetButton.on('pointerdown', function(){   
            resetConfig();                                            
            yo.scene.start('scene2');
        },this);
    }
    
    update(){ 
        setUpdateConfig(); 

        if(!sprite.body.embedded){
            thereIsStar = false;            
        }  
          
        if(endExcecution && cantStars > 0){            
            addTextGameOver(INCOMPLETE_GAME_TEXT);                        
            endExcecution = false;
        }     
    }

    
    
    }