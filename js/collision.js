function collectStar (sprite, star)
{
    if (tomarElemento){
        star.disableBody(true, true); 
        cantStars--; 
        tomarElemento = false;  
        if(cantStars === 0){        
            titleGameComplete.visible = true;
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
            titleGameComplete.visible = true;
            //Detengo la ejecución de los bloques
            resetInterpreter();    
        }                                
    }    
    
    if(sprite.x > bomb.x){       
        explosive = this.physics.add.sprite(bomb.x, bomb.y, 'explosive');
        explosive.setInteractive().setDisplaySize(50,50);
        explosive.play('activate');
        if(thereIsBomb){
            resetInterpreter();                    
            var style = {
                fontSize: '10px',
                fontFamily: 'Arial',
                color: 'black',
                backgroundColor: 'white'
            };
            var gameComplete = "Juego terminado. La bomba ha explotado. No la desactivó";
            var paddingGameComplete = 10;        
            title = yo.add.text(465, 300, '', style).setPadding(paddingGameComplete);
            title.setText(gameComplete);
            title.visible = true; 
        }             
                           
    }     
}