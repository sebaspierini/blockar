function messageForVariables(text,x,y){
    let style = {
        fontSize: '16px',
        fontFamily: 'Arial',
        color: 'black',    
        backgroundColor: 'white'        
    };        
    var message = yo.add.text(x, y, '',style);    
    message.setText(' = '+ text);
    message.visible = true;    
}

function messageSprite(text, width_a = 140, height_a = 30, x_a = 0, y_a = 0){
    /* let style = {
        fontSize: '10px',
        fontFamily: 'Arial',
        color: 'black',
        backgroundColor: 'white'
    };    
    let paddingGameComplete = 10; */
    let posXD = posX;
    if(sprite.x > (initPosX + (moveX * 3))){
        posXD = posX - (moveX * 2);
        createSpeechBubble(posXD + x_a, posY-(moveY) - y_a, width_a, height_a, text, 'right');
    }else{
        createSpeechBubble(posXD + x_a, posY-(moveY) - y_a , width_a, height_a, text, 'left');
    }
    gameOver = true;    
    resetInterpreter();
    /* let message = yo.add.text(posXD, posY-(moveY/2), '', style).setPadding(paddingGameComplete);
    message.setText(text);
    message.visible = true; */

    
}

function messageSpriteOut(text, x, y, width_a = 140, height_a = 30){
    let posXD = x;
    if(x > (initPosX + (moveX * 3))){
        posXD = x - (moveX * 2);
        createSpeechBubble(posXD, y-(moveY) , width_a, height_a, text, 'right');
    }else{
        createSpeechBubble(posXD, y-(moveY) , width_a, height_a, text, 'left');
    }
    gameOver = true;    
    resetInterpreter();
}