class SceneMenu extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'SceneMenu' });
    }
    
    preload ()
    {
        this.load.image('lv1', 'assets/lv 1.png');
        this.load.image('lv2', 'assets/lv 2.png');
        this.load.image('lv3', 'assets/lv 3.png');
    }
    
    create ()
    {
        ocultarBloques();
        var lv1Click = this.add.image(200, 200, 'lv1').setInteractive().setDisplaySize(50,50);
        var lv2Click = this.add.image(400, 200, 'lv2').setInteractive().setDisplaySize(50,50);
        var lv3Click = this.add.image(600, 200, 'lv3').setInteractive().setDisplaySize(50,50);       
        
        lv1Click.on('pointerdown', function(){  
            mostrarBloques();
            score = '1';            
            this.scene.start('sceneA');    
        }, this);
    
        lv2Click.on('pointerdown', function(){                                      
            //this.scene.start('sceneB');    
        }, this);
        
        lv3Click.on('pointerdown', function(){                       
            //this.scene.start('sceneB');    
        }, this);
    
        
    }
    
    }