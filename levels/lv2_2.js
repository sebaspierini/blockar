class Scene2_2 extends Phaser.Scene { 

    constructor ()
    {
        super({ key: 'scene2_2' });
    }
    
    preload ()
    {    
        interfaceDefine(this);
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('pc', 'assets/pc.png');
        this.load.image('shop', 'assets/shop.png');
         
    }
    
    create ()
    {        
        yo = this;
        posX = initPosX;
        posY = initPosY;      
        infoText = OBJETIVE_LV2_2_TEXT;
        document.getElementById("blocklyTextId").value = infoText;
        stack = 0;
        cantPc = 1;
        cantShop = 0;
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        messageForVariables(cantPc,posXExecutables + 10,PosYVar);
        this.add.image(posXExecutables - 5, PosYVar, 'pc').setDisplaySize(30,30);

        pcLv2 = this.physics.add.image(initPosX + (cellWidth * 5), initPosY, 'pc').setDisplaySize(40,40);
        shopLv2 = this.physics.add.image(initPosX, initPosY, 'shop').setDisplaySize(40,40);

        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');

        //colision con el mundo
        sprite.setBounce(1,1);
        sprite.setCollideWorldBounds(true);    
        
        sprite.body.setBoundsRectangle(new Phaser.Geom.Rectangle(width, 200 - 2, width, height + 4));
        
        this.add.graphics()
        .lineStyle(0.1, 0xA5A5A5, 0)
        .strokeRectShape(sprite.body.customBoundsRectangle);
        //sprite.depth = 100; con depth pongo delante al sprite para que la estrella no lo tape.        

        pcLv2.enableBody(true,initPosX + (cellWidth * 5),initPosY,true,true);
        shopLv2.enableBody(true,initPosX,initPosY,true,true);

        this.physics.add.overlap(sprite, pcLv2, collectPc, null, this);
        this.physics.add.overlap(sprite, shopLv2, putShop, null, this);
        // arreglar el bloque para que tome el de pc
        createAnimationDude();        

        createButtonsGame();
        
        playButton.on('pointerdown', function(){                       
            playConfig();                    
        });

        resetButton.on('pointerdown', function(){   
            resetConfig();                                            
            yo.scene.start('scene2_2');
        },this);
    }
    
    update(){ 
        setUpdateConfig(); 

        if(!sprite.body.embedded){
            thereIsPc = false;            
            thereIsShop = false;    
        }  

        if(cantShop === 1 && cantPc === 0 && !stopMessage){
            messageSprite(GAME_COMPLETED_TEXT);
            addPoints();              
        }
                
        if(endExcecution && (cantShop < 1 || cantPc > 0)){             
            endExcecution = false;               
            if(!gameOver){
                messageSprite(INCOMPLETE_GAME_TEXT);
            } 
        }     
    }

    
    
    }