class Scene1 extends Phaser.Scene { 

    constructor ()
    {
        super({ key: 'scene1' });
    }
    
    preload ()
    {    
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('sky', 'assets/sky.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('reset', 'assets/reset.png');
        this.load.image('menu', 'assets/menu.png');
        this.load.image('star', 'assets/star.png');         
    }
    
    create ()
    {        
        cantStars = 1;
        yo = this;
        posX = initPosX;
        posY = initPosY;      
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');

        //colision con el mundo
        sprite.setBounce(0.2);
        sprite.setCollideWorldBounds(true);        
        
        setStarsRandom();                 

        createAnimationDude();

        createButtonsGame();
        
        playButton.on('pointerdown', function(){                       
            playConfig();                   
        });

        resetButton.on('pointerdown', function(){   
            resetConfig();                   
            this.scene.start('scene1');
        },this);
    }
    
    update(){ 
        setUpdateConfig();   
        
        if(endExcecution && cantStars > 0){            
            addTextGameOver(INCOMPLETE_GAME_TEXT);            
            endExcecution = false;
        }            
    }

    
    
    }