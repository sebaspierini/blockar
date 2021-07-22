function spriteDefuseBomb(){    
        
    if(!thereIsBomb){                   
        var style = {
            fontSize: '10px',
            fontFamily: 'Arial',
            color: 'black',
            backgroundColor: 'white'
        };
        var gameComplete = "Aquí no hay bomba.";
        var paddingGameComplete = 10;
        var posXD = posX;
        if(sprite.x > (initPosX + (moveX * 4))){
            posXD = posX - (moveX * 2);
        }
        title = yo.add.text(posXD, posY-(moveY/2), '', style).setPadding(paddingGameComplete);
        title.setText(gameComplete);
        title.visible = true; 
        resetInterpreter();    
    }else{
        disableBomb = true; 
    }
    
}

function spriteGetElement(){
    tomarElemento = true;
}