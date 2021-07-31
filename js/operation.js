function spriteDefuseBomb(){            
    if(!thereIsBomb){                   
        messageSprite(NO_BOMB_TEXT);          
    }else{
        disableBomb = true; 
    }    
}

function spriteGetElement(){
    if(!thereIsStar){                   
        messageSprite(NO_CELLPHONE_TEXT);         
    }else{
        takeElement = true;
    }
}

function getMemory(){
    if(!thereIsMemory){                   
        messageSprite(NO_MEMORY_TEXT);         
    }else{
        takeMemory = true;
        stack++;
    }
}

function putInPc(){
    if(!thereIsPc){                   
        messageSprite(NO_MOTHERBOARD_TEXT);          
    }else{
        takePc = true;        
    }
}

function getDisk(){
    if(!thereIsDisk){                   
        messageSprite(NO_DISK_TEXT);         
    }else{
        takeDisk = true;
        stack++;
    }
}

function getPc(){
    if(!thereIsPc){                   
        messageSprite(NO_PC_TEXT);         
    }else{
        takePc = true; 
        stack++;       
    }
}

function putInShop(){
    if(!thereIsShop){                   
        messageSprite(NO_SHOP_TEXT);         
    }else{
        takeShop = true;        
    }
}