function createAnimationDude(){
    timeline = yo.tweens.createTimeline(); 

    yo.anims.create({
        key: 'left',
        frames: yo.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    yo.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    yo.anims.create({
        key: 'up',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    yo.anims.create({
        key: 'down',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    yo.anims.create({
        key: 'right',
        frames: yo.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}

function createAnimationExplosive(){
    yo.anims.create({
        key: 'activate',
        frames: yo.anims.generateFrameNumbers('explosive', { start: 0, end: 15 }),
        frameRate: 10,
        repeat: 0,
        hideOnComplete: true
    });  
}