function create ()
{    
  yo = this;
    posX = initPosX;
    posY = initPosY;      
    
    this.add.image(400, 300, 'sky');
    
    this.add.grid(horizontal, vertical, width, hight, cellWidth, cellhight, 0xDADADA).setAltFillStyle(0xA5A5A5).setOutlineStyle();

    sprite = this.physics.add.sprite(initPosX, initPosY, 'dude');

    star = this.physics.add.image(initPosX, initPosY - (moveY * 2), 'star');

    //colision con el mundo
    sprite.setBounce(0.2);
    sprite.setCollideWorldBounds(true);

    this.physics.add.overlap(sprite, star, collectStar, null, this);

    playButton = this.add.image(40, posYExecutables, 'play').setInteractive().setDisplaySize(70,70);
    resetButton = this.add.image(120, posYExecutables, 'reset').setInteractive().setDisplaySize(70,70);
    resetButton.visible = false;

    timeline = this.tweens.createTimeline();    

    var style = {
        fontSize: '32px',
        fontFamily: 'Arial',
        color: '#376280',
        backgroundColor: '#000000'
    };

    title = this.add.text(50, 100, '', style).setPadding(16);
    title.setText('Juego terminado');
    title.visible = false;

    element = this.add.dom(600 ,300).createFromCache('html');

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    playButton.on('pointerdown', function(){                       
            playButton.visible = false;
            resetButton.visible = true;   
            runCode();       
    });
    resetButton.on('pointerdown', function(){                        
            resetButton.visible = false;  
            playButton.visible = true;    
            sprite.x = initPosX;
            sprite.y = initPosY;
            posX = initPosX;
            posY = initPosY;     
            title.visible = false;  
            sprite.visible = true;                 
    },this);
}