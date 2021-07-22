function setUpdateConfig(param){
    if(!timeline.isPlaying()){
        sprite.anims.play('turn'); 
    }
    if((sprite.x - 1) > (initPosX + (moveX * 5))){
        //console.log("se cayo a la derecha");
        titleOutTable.visible = true;  
        sprite.visible = false;        
    }
    if((sprite.x + 1) < initPosX){
        //console.log("se cayo a la izq",sprite.x, initPosX);
        titleOutTable.visible = true;          
        sprite.visible = false;                
    }
    if((sprite.y - 0.5) > initPosY){        
        //console.log("se cayo abajo");        
        sprite.visible = false;
        titleOutTable.visible = true;            
    }
    if((sprite.y - 0.5 ) < (initPosY - (moveY * 5)) ){
        //console.log("se cayo arriba");   
        titleOutTable.visible = true;     
        sprite.visible = false;        
    }
    
    // Si pierde el juego detengo la ejecución del interpreter.
    if(sprite.visible == false){
        resetInterpreter();        
    }    

    // Me traslado al menu
    //comparto la variable score para compartir los diferentes escenarios.
    if(score==="menu"){                             
        param.scene.start('SceneMenu');        
    }
    
}

function resetConfig(){
    demoWorkspace.clear();
    endExcecution = false;   
}

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
        // Limpio el area de bloques
        demoWorkspace.clear();
        // Reseteo score a un valor distinto de 'menu' con score = 'menu' indico que vengo a esta clase.
        score = '1';

        endExcecution = false;
        
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