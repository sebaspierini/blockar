function messageForVariables(text,x,y){       
    let style = {
        fontSize: '16px',
        fontFamily: 'Arial',
        color: 'rgb(236, 236, 236)',    
        backgroundColor: '#333'        
    };   
    if(yo){
        let message = yo.add.text(x + 5, y - 3, '',style);    
        message.setText(' = '+ text);
        message.visible = true;  
    }     
      
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
        if(sprite.y < (initPosY - (moveY * 2))){
            createSpeechBubble(posXD+ x_a, posY+(moveY)+ y_a -35, width_a + 10, height_a + 10, text, 'right','up');
        }else{
            createSpeechBubble(posXD+ x_a, posY-(moveY)- y_a , width_a + 10, height_a + 10, text, 'right');
        }
        
    }else{
        if(sprite.y < (initPosY - (moveY * 2))){
            createSpeechBubble(posXD+ x_a, posY+(moveY)+ y_a -35, width_a + 10, height_a + 10, text, 'left','up');
        }else{
            createSpeechBubble(posXD+ x_a, posY-(moveY)- y_a , width_a + 10, height_a + 10, text, 'left');
        }
    }
    gameOver = true;    
    resetInterpreter();
    stopMessage = true;
    /* let message = yo.add.text(posXD, posY-(moveY/2), '', style).setPadding(paddingGameComplete);
    message.setText(text);
    message.visible = true; */

    
}

function messageSpriteOut(text, x, y, width_a = 140, height_a = 30){
    let posXD = x;
    if(x > (initPosX + (moveX * 3))){
        posXD = x - (moveX * 2);
        if(y < (initPosY - (moveY * 2))){
            createSpeechBubble(posXD, y+(moveY) -35, width_a + 10, height_a + 10, text, 'right','up');
        }else{
            createSpeechBubble(posXD, y-(moveY) , width_a + 10, height_a + 10, text, 'right');
        }
        
    }else{
        if(y < (initPosY - (moveY * 2))){
            createSpeechBubble(posXD, y+(moveY) -35, width_a + 10, height_a + 10, text, 'left','up');
        }else{
            createSpeechBubble(posXD, y-(moveY) , width_a + 10, height_a + 10, text, 'left');
        }
        
    }    
    gameOver = true;    
    resetInterpreter();
    stopMessage = true;
}

// position debe ser left o right
function createSpeechBubble (x, y, width, height, quote, position, positionY = 'down')
{
    var bubbleWidth = width;
    var bubbleHeight = height;
    var bubblePadding = 10;
    var arrowHeight = bubbleHeight / 4;

    var bubble = yo.add.graphics({ x: x, y: y });

    //  Bubble shadow
    // bubble.fillStyle(0x222222, 0.5);
    // bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

    //  Bubble color
    bubble.fillStyle(0xffffff, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x565656, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    var point1X;
    var point2X;
    var point3X;
        
    //  Calculate arrow coordinates
    if (position == 'right'){
        point1X = Math.floor((bubbleWidth / 7 )) * 5;        
        point2X = Math.floor((bubbleWidth / 7) * 2) * 3;        
        point3X = Math.floor(bubbleWidth /3.5) * 3;               
    }else{
        point1X = Math.floor(bubbleWidth / 7);        
        point2X = Math.floor((bubbleWidth / 7) * 2);        
        point3X = Math.floor(bubbleWidth / 7);         
    }
    if(positionY == 'up'){
        var point1Y = 0;
        var point2Y = 0;
        var point3Y = Math.floor(0 - arrowHeight);
    }else{
        var point1Y = bubbleHeight;
        var point2Y = bubbleHeight;
        var point3Y = Math.floor(bubbleHeight + arrowHeight);
    }    

    //  Bubble arrow shadow (sombra de la flecha de la burbuja)
    // bubble.lineStyle(4, 0x222222, 0.5);
    // bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

    //  Bubble arrow fill
    bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
    bubble.lineStyle(2, 0x565656, 1);
    bubble.lineBetween(point2X, point2Y, point3X, point3Y);
    bubble.lineBetween(point1X, point1Y, point3X, point3Y);    

    var content = yo.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 16, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    var b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
}