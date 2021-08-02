class Scene4 extends Phaser.Scene { 

    constructor ()
    {
        super({ key: 'scene4' });
    }
    
    preload ()
    {    
        this.load.image('sky', 'assets/sky.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('reset', 'assets/reset.png');
        this.load.image('menu', 'assets/menu.png');        
        this.load.image('bomb', 'assets/server.png');
        this.load.image('info', 'assets/info.png');
        this.load.image('code', 'assets/code.png');   
        this.load.spritesheet('explosive', 'assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 }); 
        this.load.spritesheet('switch', 'assets/switch.png', { frameWidth: 256, frameHeight: 136 });
    }
    
    create ()
    {               
                    
        cantBombs = 4;        
        yo = this;        
        posX = initPosX;
        posY = initPosY;      
        infoText = OBJETIVE_LV4_TEXT;
        document.getElementById("blocklyTextId").value = infoText;
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();
        
        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');                                    

        //colision con el mundo
        sprite.setBounce(1,1);
        sprite.setCollideWorldBounds(true);    
        
        sprite.body.setBoundsRectangle(new Phaser.Geom.Rectangle(width, 200 - 2, width, height + 4));
        
        this.add.graphics()
        .lineStyle(0.1, 0xA5A5A5, 0)
        .strokeRectShape(sprite.body.customBoundsRectangle);

        createAnimationExplosive(); 

        createAnimationDude();

        createButtonsGame();        

        playButton.on('pointerdown', function(){ 
            setBombsRandom();
            playConfig();                     
        });

        resetButton.on('pointerdown', function(){    
            resetConfig();                               
            this.scene.start('scene4');
        },this);
    }
    
    update(){ 
        setUpdateConfig(); 
        
        // Con embedded se puede ver si el sprite se encuentra dentro de un objeto con el que puede colisionar. 
        if(!sprite.body.embedded){
            thereIsBomb = false;            
        }         
        
        if(endExcecution && cantBombs > 0){                                       
            endExcecution = false;               
            if(!gameOver){
                messageSprite(INCOMPLETE_GAME_TEXT);
            }     
        }        
    }

    
    
    }