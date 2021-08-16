class Scene5_1 extends Phaser.Scene { 
    
    constructor ()
    {
        super({ key: 'scene5_1' });
    }
    
    preload ()
    {    
        interfaceDefine(this);    
        this.load.image('motherboard', 'assets/motherboard.png');        
        this.load.image('videoCard', 'assets/videoCard.png');      
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });         
    }
    
    create ()
    {                                           
        yo = this;
        posX = initPosX;
        posY = initPosY;    
        cantVideoCard = 2;                
        stack = 0;
        infoText = OBJETIVE_LV5_1_TEXT;
        document.getElementById("blocklyTextId").value = infoText;

        this.add.image(400, 300, 'sky');

/*         var rect = new Phaser.Geom.Rectangle(posXExecutables - (cellWidth / 2) + (cellWidth * 3), posYExecutables - (cellHeight / 2) + 10, cellWidth * 2, cellHeight - 20);

        var graphics2 = this.add.graphics({ fillStyle: { color: 0xDADADA } });
        
        graphics2.fillRectShape(rect); */
        
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        messageForVariables(cantVideoCard,posXExecutables + 10,PosYVar);        

        this.add.image(posXExecutables - 5, PosYVar, 'videoCard').setDisplaySize(30,30);            

        var pc = this.physics.add.image(initPosX - 10, initPosY - 10, 'motherboard').setDisplaySize(40,40);
        pc.enableBody(true,initPosX - 10,initPosY - 5,true,true);

        var videoCard = this.physics.add.image(initPosX + (moveX * 4), initPosY, 'videoCard').setDisplaySize(40,40);
        videoCard.enableBody(true,initPosX + (moveX * 4),initPosY,true,true);     
        
        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');          

        //colision con el mundo
        sprite.setBounce(1,1);
        sprite.setCollideWorldBounds(true);    
        
        sprite.body.setBoundsRectangle(new Phaser.Geom.Rectangle(width, 200 - 2, width, height + 4));
        
        this.add.graphics()
        .lineStyle(0.1, 0xA5A5A5, 0)
        .strokeRectShape(sprite.body.customBoundsRectangle);

        yo.physics.add.overlap(sprite, videoCard, collectVideoCard, null, yo);
        yo.physics.add.overlap(sprite, pc, putPc, null, yo);    

        createAnimationDude();

        createButtonsGame();

        playButton.on('pointerdown', function(){             
            playConfig();                     
        });

        resetButton.on('pointerdown', function(){    
            resetConfig();                               
            this.scene.start('scene5_1');
        },this);
    }
    
    update(){                 

        setUpdateConfig(); 
        
        // Con embedded se puede ver si el sprite se encuentra dentro de un objeto con el que puede colisionar. 
        if(!sprite.body.embedded){
            thereIsVideoCard = false;
            thereIsPc = false;            
        }
        
        if(cantPc === 2 && cantVideoCard === 0 && !stopMessage){
            messageSprite(GAME_COMPLETED_TEXT); 
            addPoints();                
        }
        
        if(endExcecution && (cantVideoCard > 0 || cantPc < 2)){
            endExcecution = false;               
            if(!gameOver){
                messageSprite(INCOMPLETE_GAME_TEXT);
            } 
        }        
    }

    
    
    }