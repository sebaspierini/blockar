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
        duration: tiempoSprite
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
        duration: tiempoSprite
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
                sprite.anims.play('turn');                      
                return posY;
            }
        },
        ease: 'Power1',
        duration: tiempoSprite
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
                sprite.anims.play('turn');                      
                return posY;
            }
        },        
        ease: 'Power1',
        duration: tiempoSprite
    });
}
