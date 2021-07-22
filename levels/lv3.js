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
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('explosive', 'assets/explosion.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 }); 
    }
    
    create ()
    {                             
        cantBombs = 4;
        yo = this;
        posX = initPosX;
        posY = initPosY;      
        
        this.add.image(400, 300, 'sky');
        
        this.add.grid(horizontal, vertical, width, height, cellWidth, cellHeight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();
        
        sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');       
        
        this.anims.create({
            key: 'activate',
            frames: this.anims.generateFrameNumbers('explosive', { start: 0, end: 15 }),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true
        });         

        //colision con el mundo
        sprite.setBounce(0.2);
        sprite.setCollideWorldBounds(true);

        var bombs = this.physics.add.group({
            key: 'bomb',
            frameQuantity: cantBombs,
            maxSize: 12,
            active: false,
            visible: false,
            enable: false,
            collideWorldBounds: true,
            bounceX: 0.5,
            bounceY: 0.5,
            dragX: 30,
            dragY: 0            
        });
        
        let posiciones = [];

        for (var i = 0; i < cantBombs; i++)
        {

            x_bomb = initPosX + (moveX * Phaser.Math.RND.between(0,5));
            y_bomb = initPosY - (moveY * Phaser.Math.RND.between(0,4));
            
            // Controlo que no aparezcan al inicio las estrellas
            if(x_bomb == initPosX && y_bomb == initPosY){
                x_bomb = initPosX + (moveX * Phaser.Math.RND.between(1,5));
            }

            // Controlo que no se repitan las estrellas en las posiciones que aparecieron. 
            if(i>0){
                posiciones.forEach(function(element) {                            
                    while(x_bomb == element.x && y_bomb == element.y){                        
                        x_bomb = initPosX + (moveX * Phaser.Math.RND.between(0,5));
                        y_bomb = initPosY - (moveY * Phaser.Math.RND.between(0,4));
                        if(x_bomb == initPosX && y_bomb == initPosY){
                            x_bomb = initPosX + (moveX * Phaser.Math.RND.between(1,5));
                        }    
                    }
                });
                posiciones.push({x:x_bomb,y:y_bomb});
            }else{
                posiciones.push({x:x_bomb,y:y_bomb});
            } 

            bomb = bombs.get();
            //  This creates a new Phaser.Sprite instance within the group
            //  It will be randomly placed within the world and use the 'baddie' image to display
            
            bomb.enableBody(true,x_bomb,y_bomb,true,true);
        }
                
        this.physics.add.overlap(sprite, bombs, collectBombs, null, this);

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
        var gameOver = "Juego terminado. Se cayó del tanblero.";
        var paddingGameOver = 16;
        titleOutTable = this.add.text(465, 300, '', style).setPadding(paddingGameOver);
        titleOutTable.setText(gameOver);
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
            resetConfig();                               
            this.scene.start('scene3');
        },this);
    }
    
    update(){ 
        setUpdateConfig(this); 

        // Con embedded se puede ver si el sprite se encuentra dentro de un objeto con el que puede colisionar. 
        if(!sprite.body.embedded){
            thereIsBomb = false;            
        }                              
    }

    
    
    }