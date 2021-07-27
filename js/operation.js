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

function getMemory(){
    if(!thereIsMemory){                   
        messageSprite(NO_MEMORY_TEXT); 
        resetInterpreter();    
    }else{
        takeMemory = true;
        stack++;
    }
}

function putInPc(){
    if(!thereIsPc){                   
        messageSprite(NO_PC_TEXT); 
        resetInterpreter();    
    }else{
        takePc = true;        
    }
}

function getDisk(){
    if(!thereIsDisk){                   
        messageSprite(NO_DISK_TEXT); 
        resetInterpreter();    
    }else{
        takeDisk = true;
        stack++;
    }
}