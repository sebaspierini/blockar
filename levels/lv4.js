class Scene4 extends Phaser.Scene { 

    constructor ()
    {
        super({ key: 'scene4' });
    }
    
    preload ()
    {    
        interfaceDefine(this);      
        this.load.image('bomb', 'assets/server.png');
        this.load.spritesheet('explosive', 'assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });         
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
        sprite.depth = 104;
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