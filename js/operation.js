function spriteDefuseBomb(){            
    if(!thereIsBomb){                   
        messageSprite(NO_BOMB_TEXT); 
        resetInterpreter();    
    }else{
        disableBomb = true; 
    }    
}

function spriteGetElement(){
    if(!thereIsStar){                   
        messageSprite(NO_STAR_TEXT); 
        resetInterpreter();    
    }else{
        takeElement = true;
    }
}