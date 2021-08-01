function createButtonsGame(){
    playButton = yo.add.image(posXExecutables, posYExecutables, 'play').setInteractive().setDisplaySize(50,50);
    menuButton = yo.add.image((widthGame / 2) - (cellWidth / 2), posYExecutables, 'menu').setInteractive().setDisplaySize(50,50);
    resetButton = yo.add.image(posXExecutables, posYExecutables, 'reset').setInteractive().setDisplaySize(50,50);
    resetButton.visible = false;  
    infoButton = yo.add.image(posXExecutables + cellWidth, posYExecutables, 'info').setInteractive().setDisplaySize(40,40);
    codeButton = yo.add.image(posXExecutables + (cellWidth * 2), posYExecutables, 'code').setInteractive().setDisplaySize(40,40);    

    var posXtextOn_2x = (widthGame / 2) - (cellWidth / 2) - cellWidth;
    on_2x = yo.physics.add.sprite(posXtextOn_2x , posYExecutables, 'switch').setInteractive().setDisplaySize(50,30); 
               
    yo.add.text(posXtextOn_2x - 60, posYExecutables, BTN_ACELERATION_TEXT, {fontFamily: 'Arial', color: '#000000',fontSize: '14px'}).setOrigin(0.5);

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

    });

    infoButton.on('pointerdown', function(){                                                          
        document.getElementById("blocklyTextId").value = infoText;
        buttonSelect = 1;                
    });

    codeButton.on('pointerdown', function(){                                              
        document.getElementById("blocklyTextId").value = BEGIN_CODE_TEXT+codeBlockly+END_CODE_TEXT;     
        buttonSelect = 2;                             
    });
    
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
    buttonSelect = 1;         
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


// position debe ser left o right
function createSpeechBubble (x, y, width, height, quote, position)
{
    var bubbleWidth = width;
    var bubbleHeight = height;
    var bubblePadding = 10;
    var arrowHeight = bubbleHeight / 4;

    var bubble = yo.add.graphics({ x: x, y: y });

    //  Bubble shadow
    // bubble.fillStyle(0x222222, 0.5);
    // bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

    //  Bubble color
    bubble.fillStyle(0xffffff, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x565656, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    var point1X;
    var point2X;
    var point3X;
        
    //  Calculate arrow coordinates
    if (position == 'right'){
        point1X = Math.floor((bubbleWidth / 7 )) * 5;        
        point2X = Math.floor((bubbleWidth / 7) * 2) * 3;        
        point3X = Math.floor(bubbleWidth /3.5) * 3;               
    }else{
        point1X = Math.floor(bubbleWidth / 7);        
        point2X = Math.floor((bubbleWidth / 7) * 2);        
        point3X = Math.floor(bubbleWidth / 7);         
    }
    var point1Y = bubbleHeight;
    var point2Y = bubbleHeight;
    var point3Y = Math.floor(bubbleHeight + arrowHeight);

    //  Bubble arrow shadow (sombra de la flecha de la burbuja)
    // bubble.lineStyle(4, 0x222222, 0.5);
    // bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

    //  Bubble arrow fill
    bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
    bubble.lineStyle(2, 0x565656, 1);
    bubble.lineBetween(point2X, point2Y, point3X, point3Y);
    bubble.lineBetween(point1X, point1Y, point3X, point3Y);    

    var content = yo.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 12, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    var b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
}

function addBackground(){
    var rect = new Phaser.Geom.Rectangle(0, 0, widthGame, heightGame);

    var graphics = yo.add.graphics({ fillStyle: { color: 0x01AACE } });

    graphics.fillRectShape(rect); 
}

function spriteOut(){
    return sprite.x  > (initPosX + (moveX * 5)) + 10 || sprite.x < initPosX - 10 || sprite.y > initPosY + 10 || sprite.y < (initPosY - (cellHeight * 4) - 10);
}