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
        this.load.image('pc', 'assets/pc.png');
        this.load.image('info', 'assets/info.png');
        this.load.image('code', 'assets/code.png');   
        this.load.spritesheet('switch', 'assets/switch.png', { frameWidth: 256, frameHeight: 136 });
         
    }
    
    create ()
    {
        cantPc = 5;
        yo = this;
        posX = initPosX;
        posY = initPosY;      
        infoText = OBJETIVE_LV2_TEXT;
        document.getElementById("blocklyTextId").value = infoText;
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        messageForVariables(cantPc,initPosX + 14,initPosY - (moveY * 5));
        this.add.image(initPosX - 10, initPosY - (moveY * 5), 'pc').setDisplaySize(30,30);

        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');

        //colision con el mundo
        sprite.setBounce(0.2);
        sprite.setCollideWorldBounds(true);
        //sprite.depth = 100; con depth pongo delante al sprite para que la estrella no lo tape.

        pcLv2 = this.physics.add.image(initPosX + (cellWidth * 5), initPosY, 'pc').setDisplaySize(40,40);
        pcLv2.enableBody(true,initPosX + (cellWidth * 5),initPosY,true,true);
        this.physics.add.overlap(sprite, pcLv2, collectPc, null, this);
        // arreglar el bloque para que tome el de pc
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
            thereIsPc = false;            
        }  

        if(cantPc === 6){
            messageGameCompleted();            
            resetInterpreter();  
        }
          
        if(endExcecution && cantPc > 0){ 
            endExcecution = false;               
            if(!gameOver){
                messageSprite(INCOMPLETE_GAME_TEXT);
            } 
        }     
    }

    
    
    }