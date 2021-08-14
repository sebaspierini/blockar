// En localStorage me debo guardar los datos del juego para habilitar niveles.
class SceneMenu extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'SceneMenu' });
    }
    
    preload ()
    {
                
    }
    
    create ()
    {              
        var screenCenterX = this.physics.world.bounds.width / 2;
        //var screenCenterY = this.physics.world.bounds.height / 2;            
        this.add.text(screenCenterX, 20, TITLE_MENU_TEXT, {fontFamily: 'Arial', color: '#ffffff',fontSize: '32px'}).setOrigin(0.5);
            
        var distance = 120;
        var config1 = {
            x: 50,
            y: 150,
            text: '',
            padding: {
                left: 32,
                right: 32,
                top: 20,
                bottom: 20
            },
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#000000',
                align: 'center',
                backgroundColor: '#ffffff',            
            }
        };
   
        config1.text = '1';
    
        let lv1Click = this.make.text(config1).setInteractive();
    
        config1.x = config1.x + distance;        
        config1.text = '2';
    
        let lv2_1Click = this.make.text(config1).setInteractive();

        config1.x = config1.x + distance;        
        config1.text = '3';
    
        let lv2_2Click = this.make.text(config1).setInteractive();

        config1.x = config1.x + distance;        
        config1.text = '4';
    
        let lv2Click = this.make.text(config1).setInteractive();
    
        config1.x = config1.x + distance;        
        config1.text = '5';
    
        let lv5_1Click = this.make.text(config1).setInteractive();
    
        config1.x = config1.x + distance;        
        config1.text = '6';
    
        let lv3Click = this.make.text(config1).setInteractive();

        config1.x = 50;        
        config1.y = config1.y + 130;     
        config1.text = '7';
    
        let lv4Click = this.make.text(config1).setInteractive();
        
        // Reseteo score a un valor distinto de 'menu' con score = 'menu' indico que vengo a esta clase.
        score = '1';  
        beginScene = true;
        cantBlocks = 1;
        resetConfig();
        hideBlocks();
        
         

        lv1Click.on('pointerdown', function(){                           
            inject_blockly();                                                  
            showCategoriesLv1();                                                
            this.scene.start('scene1');    
        }, this);
    
        lv2Click.on('pointerdown', function(){   
            inject_blockly(11);                
            showCategoriesLv2();                                                                         
            this.scene.start('scene2');    
        }, this);

        lv2_1Click.on('pointerdown', function(){   
            inject_blockly(5);                
            showCategoriesLv2_1();                                                             
            this.scene.start('scene2_1');    
        }, this);

        lv2_2Click.on('pointerdown', function(){   
            inject_blockly(9);                
            showCategoriesLv2();                                                             
            this.scene.start('scene2_2');    
        }, this);
        
        lv3Click.on('pointerdown', function(){
            inject_blockly();            
            showCategoriesLv3();                   
            this.scene.start('scene3');   
        }, this);

        lv4Click.on('pointerdown', function(){
            inject_blockly();            
            showCategoriesLv4();                 
            this.scene.start('scene4');   
        }, this);

        lv5_1Click.on('pointerdown', function(){
            inject_blockly(17);            
            showCategoriesLv5_1();                 
            this.scene.start('scene5_1');   
        }, this);
    }
    
    }