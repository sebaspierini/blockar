function spriteDefuseBomb(){            
    if(!thereIsBomb){                   
        messageSprite(NO_BOMB_TEXT); 
        resetInterpreter();    
    }else{
        disableBomb = true; 
    }    
}

function spriteGetElement(){
    takeElement = true;
}