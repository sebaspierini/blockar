class SceneA extends Phaser.Scene { 

    constructor ()
    {
        super({ key: 'sceneA' });
    }
    
    preload ()
    {    
        this.load.image('sky', 'assets/sky.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('reset', 'assets/reset.png');
        this.load.image('menu', 'assets/menu.png');
        this.load.image('star', 'assets/star.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 }); 
    }
    
    create ()
    {
        yo = this;
        posX = initPosX;
        posY = initPosY;      
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, hight, cellWidth, cellhight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');

        star = this.physics.add.image(initPosX + (moveX * 2), initPosY - (moveY * 2), 'star');

        //colision con el mundo
        sprite.setBounce(0.2);
        sprite.setCollideWorldBounds(true);

        this.physics.add.overlap(sprite, star, collectStar, null, this);

        playButton = this.add.image(posXExecutables, posYExecutables, 'play').setInteractive().setDisplaySize(50,50);
        menuButton = this.add.image((widthGame / 2) - (cellWidth / 2), posYExecutables, 'menu').setInteractive().setDisplaySize(50,50);
        resetButton = this.add.image(posXExecutables + cellWidth, posYExecutables, 'reset').setInteractive().setDisplaySize(50,50);
        resetButton.visible = false;

        timeline = this.tweens.createTimeline();    

        var style = {
            fontSize: '16px',
            fontFamily: 'Arial',
            color: 'white',
            backgroundColor: '#000000'
        };
        var gameOver = "Juego terminado";
        var paddingGameOver = 16;
        title = this.add.text(465, 300, '', style).setPadding(paddingGameOver);
        title.setText(gameOver);
        title.visible = false;  

        titleOutTable = this.add.text(465, 300, '', style).setPadding(paddingGameOver);
        titleOutTable.setText("Juego terminado. Se cayó del tanblero.");
        titleOutTable.visible = false; 
        
        
        
        var style = {
            fontSize: '16px',
            fontFamily: 'Arial',
            color: 'white',
            backgroundColor: '#28B463'
        };
        var gameComplete = "Juego completado";
        var paddingGameComplete = 16;
        titleGameComplete = this.add.text(465, 300, '', style).setPadding(paddingGameComplete);
        titleGameComplete.setText(gameComplete);
        titleGameComplete.visible = false;  
        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        playButton.on('pointerdown', function(){                       
                playButton.visible = false;
                resetButton.visible = true;               
                runCode();                                   
        });
        menuButton.on('pointerdown', function(){                                              
        score = "menu";                                 
        });
        resetButton.on('pointerdown', function(){                                  
                resetButton.visible = false;  
                playButton.visible = true;    
                sprite.x = initPosX;
                sprite.y = initPosY;
                posX = initPosX;
                posY = initPosY;     
                title.visible = false;  
                titleOutTable.visible = false;
                titleGameComplete.visible = false;
                sprite.visible = true;       
                cantStars = 1;               
                /* star = yo.physics.add.image(initPosX + (moveX * 2), initPosY - (moveY * 2), 'star');    
                yo.physics.add.overlap(sprite, star, collectStar, null, this); */  
        },this);
    }
    
    update(){ 
        if(!timeline.isPlaying()){
            sprite.anims.play('turn'); 
        }
        if(sprite.x > (initPosX + (moveX * 5))){
            console.log("se cayo a la derecha");
            titleOutTable.visible = true;  
            sprite.visible = false;        
        }
        if(sprite.x < initPosX){
            console.log("se cayo a la izq");
            titleOutTable.visible = true;  
            sprite.visible = false;        
        }
        if(sprite.y > initPosY){        
            console.log("se cayo abajo", sprite.y, initPosY);        
            sprite.visible = false;
            titleOutTable.visible = true;            
        }
        if(sprite.y < (initPosY - (moveY * 5)) ){
            console.log("se cayo arriba");   
            titleOutTable.visible = true;     
            sprite.visible = false;        
        }   
        if(score==="menu"){                             
            this.scene.start('SceneMenu');        
        }
        //comparto la variable score para compartir los diferentes escenarios.
        
    }

    
    
    }