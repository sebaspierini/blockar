function collectStar (sprite, star)
{    
    thereIsStar = true;

    if (takeElement){
        star.disableBody(true, true); 
        cantStars--; 
        takeElement = false;  
        if(cantStars === 0){        
            messageGameCompleted();
            //Detengo la ejecución de los bloques
            resetInterpreter();    
        }        
    }    
}

function collectBombs (sprite, bomb)
{
    thereIsBomb = true;
    
    if (disableBomb){   
        disableBomb = false;      
        cantBombs--;                
        bomb.disableBody(true, true);  
        if(cantBombs === 0){        
            messageGameCompleted();            
            resetInterpreter();    
        }                                
    }    

    let keyAnimSprite = sprite.anims.currentAnim.key;
    
    if(!gameOver){
        if((keyAnimSprite == 'right' && sprite.x > bomb.x) || (keyAnimSprite == 'left' && sprite.x < bomb.x) || (keyAnimSprite == 'up' && sprite.y < bomb.y) || (keyAnimSprite == 'down' && sprite.y > bomb.y)){                           
            resetInterpreter();
            addTextGameOver(BOMB_EXPLODED_TEXT);                                         
            explosive = this.physics.add.sprite(bomb.x, bomb.y, 'explosive');
            explosive.setInteractive().setDisplaySize(50,50);
            explosive.play('activate');
        }    
    } 
}

function collectDisk(sprite,disk){
    thereIsDisk = true;
    if(stack>1){
        messageSprite(NO_GET_MORE_TEXT); 
        resetInterpreter();     
    }else{
        if (takeDisk){                
            cantDisk--;
            messageForVariables(cantDisk,initPosX + (moveX * 2) + 14,initPosY - (moveY * 5));
            if(cantDisk === 0){
                disk.disableBody(true,true);
            }    
            takeDisk = false;     
        } 
    }
    
}

function collectMemory(sprite,memory){
    thereIsMemory = true;    
    if(stack>1){
        messageSprite(NO_GET_MORE_TEXT); 
        resetInterpreter();     
    }else{
        if (takeMemory){           
            cantMemory--;               
            messageForVariables(cantMemory,initPosX + 14,initPosY - (moveY * 5));
            if(cantMemory === 0){
                memory.disableBody(true,true);
            }  
            takeMemory = false;     
        }
    }
}

function putPc(sprite,pc){
    thereIsPc = true;
    if (takePc){        
        cantPc++;    
        stack--;
        takePc = false;     
    }
}