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
        
        var stars = this.physics.add.group({
            key: 'star',
            frameQuantity: cantStars,
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

        for (var i = 0; i < cantStars; i++)
        {

            x_star = initPosX + (moveX * Phaser.Math.RND.between(0,5));
            y_star = initPosY - (moveY * Phaser.Math.RND.between(0,4));
            
            // Controlo que no aparezcan al inicio las estrellas
            if(x_star == initPosX && y_star == initPosY){
                x_star = initPosX + (moveX * Phaser.Math.RND.between(1,5));
            }

            // Controlo que no se repitan las estrellas en las posiciones que aparecieron. 
            if(i>0){
                posiciones.forEach(function(element) {                            
                    while(x_star == element.x && y_star == element.y){                        
                        x_star = initPosX + (moveX * Phaser.Math.RND.between(0,5));
                        y_star = initPosY - (moveY * Phaser.Math.RND.between(0,4));
                        if(x_star == initPosX && y_star == initPosY){
                            x_star = initPosX + (moveX * Phaser.Math.RND.between(1,5));
                        }    
                    }
                });
                posiciones.push({x:x_star,y:y_star});
            }else{
                posiciones.push({x:x_star,y:y_star});
            } 

            star = stars.get();            
            
            star.enableBody(true,x_star,y_star,true,true);
        }

        this.physics.add.overlap(sprite, stars, collectStar, null, this);

        playButton = this.add.image(posXExecutables, posYExecutables, 'play').setInteractive().setDisplaySize(50,50);
        menuButton = this.add.image((widthGame / 2) - (cellWidth / 2), posYExecutables, 'menu').setInteractive().setDisplaySize(50,50);
        resetButton = this.add.image(posXExecutables + cellWidth, posYExecutables, 'reset').setInteractive().setDisplaySize(50,50);
        resetButton.visible = false;

        timeline = this.tweens.createTimeline();    

        // Mensaje de juego terminado 
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
        
        // Mensaje de juego completado 
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
            this.scene.start('scene1');
        },this);
    }
    
    update(){ 
        setUpdateConfig(this);   
        
        if(endExcecution && cantStars > 0){            
            var style = {
                fontSize: '14px',
                fontFamily: 'Arial',
                color: 'white',
                backgroundColor: '#000000'
            };
            var gameOver = "Juego terminado. No logró cumplir el objetivo.";
            var paddingGameOver = 16;
            titleOutTable = this.add.text(400, 300, '', style).setPadding(paddingGameOver);
            titleOutTable.setText(gameOver);
            titleOutTable.visible = true;
            endExcecution = false;
        }
    }

    
    
    }