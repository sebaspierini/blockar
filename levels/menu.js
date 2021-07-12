function collectStar (sprite, star)
{
    if (tomarElemento){
        star.disableBody(true, true); 
        cantStars--; 
        tomarElemento = false;          
    }
    
    if(cantStars === 0){        
        titleGameComplete.visible = true;
        //Detengo la ejecución de los bloques
        resetInterpreter();    
    }    
}

function spriteGetElement(){
    tomarElemento = true;
}

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
        ocultarBloques();
        // Limpio el area de bloques
        demoWorkspace.clear();
        
        var lv1Click = this.add.image(200, 200, 'lv1').setInteractive().setDisplaySize(50,50);
        var lv2Click = this.add.image(400, 200, 'lv2').setInteractive().setDisplaySize(50,50);
        var lv3Click = this.add.image(600, 200, 'lv3').setInteractive().setDisplaySize(50,50);       
        
        lv1Click.on('pointerdown', function(){  
            mostrarBloques();            
            ocultarCategorias();
            score = '1';            
            this.scene.start('scene1');    
        }, this);
    
        lv2Click.on('pointerdown', function(){   
            mostrarBloques();
            demoWorkspace.getToolbox().getToolboxItemById('loop_for').show(); 
            demoWorkspace.getToolbox().getToolboxItemById('logic').hide();     
            demoWorkspace.getToolbox().getToolboxItemById('condition').hide(); 
            demoWorkspace.getToolbox().getToolboxItemById('math').hide();     
            score = '1';                                     
            this.scene.start('scene2');    
        }, this);
        
        lv3Click.on('pointerdown', function(){                       
            mostrarBloques();
            demoWorkspace.getToolbox().getToolboxItemById('loop_for').show();            
            demoWorkspace.getToolbox().getToolboxItemById('logic').show();
            demoWorkspace.getToolbox().getToolboxItemById('condition').show();
            demoWorkspace.getToolbox().getToolboxItemById('math').show();
            score = '1';                                     
            this.scene.start('scene3');   
        }, this);
    
        
    }
    
    }