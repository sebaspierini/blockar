function createButtonsGame(){    
    playButton = yo.add.image(posXExecutables + (cellWidth * 3), posYExecutables, 'play').setInteractive().setDisplaySize(50,50);
    menuButton = yo.add.image(posXExecutables + (cellWidth * 4 ), posYExecutables, 'menu').setInteractive().setDisplaySize(50,50);
    resetButton = yo.add.image(posXExecutables + (cellWidth * 3), posYExecutables, 'reset').setInteractive().setDisplaySize(50,50);      
    infoButton = yo.add.image(posXExecutables + +5, posYExecutables, 'info').setInteractive().setDisplaySize(40,40);    
    codeButton = yo.add.image(posXExecutables + 5 , posYExecutables, 'code').setInteractive().setDisplaySize(40,40);
    enlarge = yo.add.image(posXExecutables + (cellWidth * 5) , posYExecutables, 'enlarge').setInteractive().setDisplaySize(40,40);
    reduce = yo.add.image(posXExecutables + (cellWidth * 5) , posYExecutables, 'reduce').setInteractive().setDisplaySize(40,40);
    
    yo.add.image(posXExecutables + (cellWidth * 4) - 5, PosYVar, 'blocks').setDisplaySize(30,30);
    messageForVariables(cantBlocks,posXExecutables + (cellWidth * 4) + 10, PosYVar);

    var posXtextOn_2x = posXExecutables + (cellWidth * 2);
    on_2x = yo.physics.add.sprite(posXtextOn_2x , posYExecutables, 'switch').setInteractive().setDisplaySize(50,30); 
       
    if(beginScene){
        let begin = yo.add.text(posXExecutables + (cellWidth * 2) + 30, posYExecutables + cellHeight, BTN_BEGIN_TEXT, {
            fontFamily: 'Arial',backgroundColor:'#333',padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
        },
        color: 'rgb(236, 236, 236)',
        fontSize: '21px'
        }).setOrigin(0.5).setInteractive();

        playButton.visible = false;
        menuButton.visible = false;
        resetButton.visible = false;
        infoButton.visible = false;
        on_2x.visible = false;
        
        beginScene = false;
        enlarge.visible = false;

        begin.on('pointerdown', function(){ 
            $(".blocklyTextMy").hide();                                             
            $(".classBlocklyDiv").show(); 
            playButton.visible = true;
            menuButton.visible = true;        
            infoButton.visible = true;  
            on_2x.visible = true;
            //codeButton.visible = true; 
            begin.visible = false;               
            enlarge.visible = true;                             
        });
    }
    resetButton.visible = false;
    reduce.visible = false;
    codeButton.visible = false;

    on_2x.on('pointerdown', function(){                                              
        if(on_off){
            on_2x.anims.play('off');     
            timeSprite = 1000;            
            on_off = false;
        }else{
            on_2x.anims.play('on');  
            timeSprite = 100;              
            on_off = true;
        }
    }); 

    createAnimationOn2x();

    menuButton.on('pointerdown', function(){   
        demoWorkspace.dispose();
        score = "menu";         
        $('#blocklyArea').attr('class','centerBlocklyDiv classBlocklyDiv');        
        onresize();        
    });

    infoButton.on('pointerdown', function(){   
        $(".blocklyTextMy").show();                                                       
        $(".classBlocklyDiv").hide();
        enlarge.visible = false; 
        reduce.visible = false; 
        codeButton.visible = true;
        infoButton.visible = false;                    
    });

    codeButton.on('pointerdown', function(){ 
        $(".blocklyTextMy").hide();                                             
        $(".classBlocklyDiv").show();
        enlarge.visible = true;
        infoButton.visible = true;   
        codeButton.visible = false;                             
    }); 
    
    enlarge.on('pointerdown', function(){   
        $('#blocklyArea').attr('class','centerBlocklyDivResize classBlocklyDiv');
        onresize();
        reduce.visible = true;   
        enlarge.visible = false; 
    });

    reduce.on('pointerdown', function(){   
        $('#blocklyArea').attr('class','centerBlocklyDiv classBlocklyDiv');
        onresize();
        reduce.visible = false;   
        enlarge.visible = true;                     
    });
    
}

function interfaceDefine(yo){       
    yo.load.image('sky', 'assets/sky.png');
    yo.load.image('blocks', 'assets/blocks.png');
    yo.load.image('play', 'assets/play.png');
    yo.load.image('reset', 'assets/reset.png');
    yo.load.image('enlarge', 'assets/enlarge.png');
    yo.load.image('reduce', 'assets/reduce.png');
    yo.load.image('menu', 'assets/menu.png');
    yo.load.image('info', 'assets/info.png');
    yo.load.image('code', 'assets/code.png'); 
    yo.load.spritesheet('switch', 'assets/switch.png', { frameWidth: 256, frameHeight: 136 });   
}

function playConfig(){
    playButton.visible = false;
    resetButton.visible = true; 
    runCode();
}

function resetConfig(){    
    resetInterpreter();      
    endExcecution = false;
    gameOver = false;    
    timeSprite = 1000;
    on_off = false;           
    stopMessage = false;
    $(".blocklyTextMy").hide();                                             
    $(".classBlocklyDiv").show();      
}

function setUpdateConfig(){
    if(!timeline.isPlaying()){
        sprite.anims.play('turn'); 
    }          

    // Me traslado al menu
    //comparto la variable score para compartir los diferentes escenarios.
    if(score==="menu"){                             
        yo.scene.start('SceneMenu');        
    }
    
    if(!stopMessage){
        // A todos los casos les dejo un margen de 10
        if( sprite.x  > (initPosX + (moveX * 5)) + 10 ){        
            //console.log("se cayo a la derecha");        
            messageSpriteOut(SPRITE_OUT_GAME_TEXT,(initPosX + (moveX * 5)), posY);     
        }
        if( sprite.x < initPosX - 10 ){
            //console.log("se cayo a la izq",sprite.x, initPosX);    
            messageSpriteOut(SPRITE_OUT_GAME_TEXT,initPosX, posY);                        
        }
        if( sprite.y > initPosY + 10 ){
            //console.log("se cayo abajo");        
            messageSpriteOut(SPRITE_OUT_GAME_TEXT,posX, initPosY);           
        }
        if( sprite.y < (initPosY - (cellHeight * 4) - 10) ){
            //console.log("se cayo arriba");                            
            messageSpriteOut(SPRITE_OUT_GAME_TEXT,posX, (initPosY - (cellHeight * 4)));  
        }    
    }
    
    
}

// Genera una cantidad de bombas en el tablero.
function setBombsRandom(){
    let bombs = yo.physics.add.group({
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
        bomb.setDisplaySize(40,40);
        //  yo creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        
        bomb.enableBody(true,x_bomb,y_bomb,true,true);
    }

    yo.physics.add.overlap(sprite, bombs, collectBombs, null, yo);
}

function setStarsRandom(){
    //star = yo.add.group();
    let stars = yo.physics.add.group({
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
        star.setDisplaySize(40,40);
        //  yo creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        
        star.enableBody(true,x_star,y_star,true,true);
    }

    //var group = yo.add.group({ key: 'star', frame: 0, repeat: 0 });

    //Phaser.Actions.GridAlign(group.getChildren(), { width: width, height: height, cellWidth: cellWidth, cellHeight: cellHeight, position: Phaser.Display.Align.CENTER, x:  initPosX + (moveX * Phaser.Math.RND.between(1,5)), y: initPosY - (moveY * Phaser.Math.RND.between(0,4)) });        
    
    //star = yo.physics.add.image(x_star, y_star, 'star');

    yo.physics.add.overlap(sprite, stars, collectStar, null, yo);
}

function addBackground(){
    var rect = new Phaser.Geom.Rectangle(0, 0, widthGame, heightGame);

    var graphics = yo.add.graphics({ fillStyle: { color: 0x01AACE } });

    graphics.fillRectShape(rect); 
}

function spriteOut(){
    return sprite.x  > (initPosX + (moveX * 5)) + 10 || sprite.x < initPosX - 10 || sprite.y > initPosY + 10 || sprite.y < (initPosY - (cellHeight * 4) - 10);
}