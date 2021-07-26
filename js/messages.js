function messageGameCompleted(){
    // Mensaje de juego completado 
    let style = {
        fontSize: '16px',
        fontFamily: 'Arial',
        color: 'white',
        backgroundColor: '#28B463'
    };        
    let message = yo.add.text(465, 300, '', style).setPadding(16);
    message.setText(GAME_COMPLETED_TEXT);
    message.visible = true; 
}

function addTextGameOver(text){
    titleGameOver = titleGameOver + "\n" +text;
    gameOver = true;
}

function resetTextGameOver(){
    titleGameOver = GAME_OVER_TEXT;    
    gameOver = false;    
}

function messageGameOver(){
    // Mensaje de juego terminado 
    var style = {
        fontSize: '16px',
        fontFamily: 'Arial',
        color: 'white',
        backgroundColor: '#000000'
    };        
    let paddingGameOver = 16;
    let message = yo.add.text(465, 300, '', style).setPadding(paddingGameOver);
    message.setText(titleGameOver);        
    message.visible = true;    
}

function messageSprite(text, width_a = 140, height_a = 30){
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
        createSpeechBubble(posXD, posY-(moveY), width_a, height_a, text, 'right');
    }else{
        createSpeechBubble(posXD, posY-(moveY), width_a, height_a, text, 'left');
    }
    /* let message = yo.add.text(posXD, posY-(moveY/2), '', style).setPadding(paddingGameComplete);
    message.setText(text);
    message.visible = true; */

    
}