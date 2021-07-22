// En localStorage me debo guardar los datos del juego para habilitar niveles.
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
        // Oculto las opciones de bloques y el textarea
        hideBlocks();

        resetConfig();
        
        // Reseteo score a un valor distinto de 'menu' con score = 'menu' indico que vengo a esta clase.
        score = '1';             
        
        var lv1Click = this.add.image(200, 200, 'lv1').setInteractive().setDisplaySize(50,50);
        var lv2Click = this.add.image(400, 200, 'lv2').setInteractive().setDisplaySize(50,50);
        var lv3Click = this.add.image(600, 200, 'lv3').setInteractive().setDisplaySize(50,50);       
        
        lv1Click.on('pointerdown', function(){                         
            showBlocks();            
            showCategoriesLv1();                                    
            this.scene.start('scene1');    
        }, this);
    
        lv2Click.on('pointerdown', function(){   
            showBlocks();
            showCategoriesLv2();                                                     
            this.scene.start('scene2');    
        }, this);
        
        lv3Click.on('pointerdown', function(){
            showBlocks();
            showCategoriesLv3();             
            this.scene.start('scene3');   
        }, this);
    }
    
    }