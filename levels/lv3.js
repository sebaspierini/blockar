class Scene3 extends Phaser.Scene { 
    
    constructor ()
    {
        super({ key: 'scene3' });
    }
    
    preload ()
    {    
        interfaceDefine(this);
        this.load.image('motherboard', 'assets/motherboard.png');        
        this.load.image('memory', 'assets/ram-memory.png');  
        this.load.image('disk', 'assets/hard-disk.png');  
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 }); 
    }
    
    create ()
    {                                           
        yo = this;
        posX = initPosX;
        posY = initPosY;    
        cantDisk = 2;
        cantMemory = 4;
        cantPc = 0;
        stack = 0;
        infoText = OBJETIVE_LV3_TEXT;
        document.getElementById("blocklyTextId").value = infoText;

        this.add.image(400, 300, 'sky');

/*         var rect = new Phaser.Geom.Rectangle(posXExecutables - (cellWidth / 2) + (cellWidth * 3), posYExecutables - (cellHeight / 2) + 10, cellWidth * 2, cellHeight - 20);

        var graphics2 = this.add.graphics({ fillStyle: { color: 0xDADADA } });
        
        graphics2.fillRectShape(rect); */
        
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        messageForVariables(cantMemory,posXExecutables  + 10,PosYVar);
        messageForVariables(cantDisk,posXExecutables + (cellWidth ) + 10,PosYVar);

        this.add.image(posXExecutables - 5, PosYVar, 'memory').setDisplaySize(30,30);
        this.add.image(posXExecutables + (cellWidth ) - 5, PosYVar, 'disk').setDisplaySize(30,30);        

        var pc = this.physics.add.image(initPosX - 10, initPosY - 10, 'motherboard').setDisplaySize(40,40);
        pc.enableBody(true,initPosX - 10,initPosY - 5,true,true);

        var memory = this.physics.add.image(initPosX + (moveX * 4), initPosY, 'memory').setDisplaySize(40,40);
        memory.enableBody(true,initPosX + (moveX * 4),initPosY,true,true);

        var disk = this.physics.add.image(initPosX + (moveX * 4), initPosY - (moveY * 4), 'disk').setDisplaySize(40,40);
        disk.enableBody(true,initPosX + (moveX * 4),initPosY - (moveY * 4),true,true);        
        
        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');          

        //colision con el mundo
        sprite.setBounce(1,1);
        sprite.setCollideWorldBounds(true);    
        
        sprite.body.setBoundsRectangle(new Phaser.Geom.Rectangle(width, 200 - 2, width, height + 4));
        
        this.add.graphics()
        .lineStyle(0.1, 0xA5A5A5, 0)
        .strokeRectShape(sprite.body.customBoundsRectangle);

        yo.physics.add.overlap(sprite, memory, collectMemory, null, yo);
        yo.physics.add.overlap(sprite, pc, putPc, null, yo);
        yo.physics.add.overlap(sprite, disk, collectDisk, null, yo);

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
            thereIsMemory = false;
            thereIsPc = false;
            thereIsDisk = false;
        }
        
        if(cantPc === 6 && cantMemory === 0 && cantDisk === 0 && !stopMessage){
            messageSprite(GAME_COMPLETED_TEXT);
            addPoints();                     
        }
        
        if(endExcecution && cantPc < 6){
            endExcecution = false;               
            if(!gameOver){
                messageSprite(INCOMPLETE_GAME_TEXT);
            } 
        }        
    }

    
    
    }