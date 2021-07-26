class Scene3 extends Phaser.Scene { 

    constructor ()
    {
        super({ key: 'scene3' });
    }
    
    preload ()
    {    
        this.load.image('sky', 'assets/sky.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('reset', 'assets/reset.png');
        this.load.image('menu', 'assets/menu.png');        
        this.load.image('pc', 'assets/pc.png');        
        this.load.image('memory', 'assets/ram-memory.png');  
        this.load.image('disk', 'assets/hard-disk.png');  
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.spritesheet('switch', 'assets/switch.png', { frameWidth: 256, frameHeight: 136 });
    }
    
    create ()
    {                             
        cantBombs = 4;
        yo = this;
        posX = initPosX;
        posY = initPosY;      
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        this.physics.add.image(initPosX - 10, initPosY - 10, 'pc').setDisplaySize(40,40);

        this.physics.add.image(initPosX + (moveX * 4), initPosY, 'memory').setDisplaySize(40,40);

        this.physics.add.image(initPosX + (moveX * 4), initPosY - (moveY * 4), 'disk').setDisplaySize(40,40);        
        
        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');                     

        //colision con el mundo
        sprite.setBounce(0.2);
        sprite.setCollideWorldBounds(true);

        

        createAnimationDude();

        createButtonsGame();

        playButton.on('pointerdown', function(){             
            playConfig();                     
        });

        resetButton.on('pointerdown', function(){    
            resetConfig();                               
            this.scene.start('scene3');
        },this);
    }
    
    update(){ 
        setUpdateConfig(); 
        
        // Con embedded se puede ver si el sprite se encuentra dentro de un objeto con el que puede colisionar. 
        if(!sprite.body.embedded){
            thereIsBomb = false;            
        }         
        
        if(endExcecution && cantBombs > 0){
            addTextGameOver(INCOMPLETE_GAME_TEXT);                   
            endExcecution = false;
        }        
    }

    
    
    }