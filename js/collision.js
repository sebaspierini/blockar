function collectStar (sprite, star)
{    
    thereIsStar = true;

    if (takeElement){
        star.disableBody(true, true); 
        cantStars--; 
        takeElement = false;  
        if(cantStars === 0){        
            messageSprite(GAME_COMPLETED_TEXT);                       
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
            messageSprite(GAME_COMPLETED_TEXT);                    
        }                                
    }    

    let keyAnimSprite = sprite.anims.currentAnim.key;
    
    if(!gameOver && !spriteOut()){        
        if((keyAnimSprite == 'right' && sprite.x > bomb.x + 10) || (keyAnimSprite == 'left' && sprite.x < bomb.x - 10) || (keyAnimSprite == 'up' && sprite.y < bomb.y - 10) || (keyAnimSprite == 'down' && sprite.y > bomb.y + 10)){                                       
            messageSprite(BOMB_EXPLODED_TEXT, 130, 50, 0, 10);             
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

function collectPc(sprite,pcLv2){
    thereIsPc = true;
    if(stack>1){
        messageSprite(NO_GET_MORE_TEXT);            
    }else{
        if (takePc){        
            cantPc--;    
            messageForVariables(cantPc,initPosX + 14,initPosY - (moveY * 5));        
            if(cantPc === 0){
                pcLv2.disableBody(true,true);
            }     
            takePc = false;     
        }
    }
    
}

function putShop(sprite,shop){
    thereIsShop = true;    
    if (takeShop){        
        cantShop++; 
        stack--;                     
        takeShop = false;     
    }        
}