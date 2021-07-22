function createButtonsGame(){
    playButton = yo.add.image(posXExecutables, posYExecutables, 'play').setInteractive().setDisplaySize(50,50);
    menuButton = yo.add.image((widthGame / 2) - (cellWidth / 2), posYExecutables, 'menu').setInteractive().setDisplaySize(50,50);
    resetButton = yo.add.image(posXExecutables + cellWidth, posYExecutables, 'reset').setInteractive().setDisplaySize(50,50);
    resetButton.visible = false;                         

    menuButton.on('pointerdown', function(){                                              
        score = "menu";                                 
    });
    
}

function playConfig(){
    playButton.visible = false;
    resetButton.visible = true; 
    runCode();
}

function resetConfig(){
    demoWorkspace.clear();
    endExcecution = false;
    resetTextGameOver();  
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

    if (gameOver){
        resetInterpreter();
        messageGameOver();        
    }else{
        if((sprite.x - 1) > (initPosX + (moveX * 5))){
            //console.log("se cayo a la derecha");
            addTextGameOver(SPRITE_OUT_GAME_TEXT);          
            sprite.visible = false;        
        }
        if((sprite.x + 1) < initPosX){
            //console.log("se cayo a la izq",sprite.x, initPosX);
            addTextGameOver(SPRITE_OUT_GAME_TEXT);            
            sprite.visible = false;                
        }
        if((sprite.y - 0.5) > initPosY){        
            //console.log("se cayo abajo");        
            sprite.visible = false;
            addTextGameOver(SPRITE_OUT_GAME_TEXT);             
        }
        if((sprite.y - 0.5 ) < (initPosY - (moveY * 5)) ){
            //console.log("se cayo arriba");   
            addTextGameOver(SPRITE_OUT_GAME_TEXT);         
            sprite.visible = false;        
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
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        
        bomb.enableBody(true,x_bomb,y_bomb,true,true);
    }

    yo.physics.add.overlap(sprite, bombs, collectBombs, null, yo);
}

function setStarsRandom(){
    //star = this.add.group();
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
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        
        star.enableBody(true,x_star,y_star,true,true);
    }

    //var group = this.add.group({ key: 'star', frame: 0, repeat: 0 });

    //Phaser.Actions.GridAlign(group.getChildren(), { width: width, height: height, cellWidth: cellWidth, cellHeight: cellHeight, position: Phaser.Display.Align.CENTER, x:  initPosX + (moveX * Phaser.Math.RND.between(1,5)), y: initPosY - (moveY * Phaser.Math.RND.between(0,4)) });        
    
    //star = this.physics.add.image(x_star, y_star, 'star');

    yo.physics.add.overlap(sprite, stars, collectStar, null, yo);
}