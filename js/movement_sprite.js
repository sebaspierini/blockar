function spriteRight(){
    timeline.add({
        targets: sprite,        
        x: {
            getEnd: function (sprite, key, value)
            {                                
                posX += moveX;                
                return posX;
            },
            getStart: function (sprite, key, value)
            {                     
                sprite.anims.play('right');                            
                return posX;
            }
        },
        ease: 'Power1',
        duration: timeSprite
    });
}

function spriteLeft(){
    
    timeline.add({
        targets: sprite,              
        x: {
            getEnd: function (sprite, key, value)
            {                                
                posX -= moveX;                
                return posX;
            },
            getStart: function (sprite, key, value)
            {          
                sprite.anims.play('left');                      
                return posX;
            }
        },
        ease: 'Power1',
        duration: timeSprite
    });
}

function spriteUp(){
    
    timeline.add({
        targets: sprite,              
        y: {
            getEnd: function (sprite, key, value)
            {                                
                posY -= moveY;                
                return posY;
            },
            getStart: function (sprite, key, value)
            {          
                sprite.anims.play('up');                      
                return posY;
            }
        },
        ease: 'Power1',
        duration: timeSprite
    });
}

function spriteDown(){
    
    timeline.add({
        targets: sprite,              
        y: {
            getEnd: function (sprite, key, value)
            {                                
                posY += moveY;                
                return posY;
            },
            getStart: function (sprite, key, value)
            {          
                sprite.anims.play('down');                      
                return posY;
            }
        },        
        ease: 'Power1',
        duration: timeSprite
    });
}