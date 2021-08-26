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
        scoreLevels = JSON.parse(localStorage.getItem('scores'));

        if(scoreLevels === null){
            scoreLevels = [];            
            for (var i=0;i<8;i++){                
                scoreLevels[i] = {points: 0, attempts:0};                
            }   
            localStorage.setItem("scores",JSON.stringify(scoreLevels));                   
        }

        //var screenCenterX = this.physics.world.bounds.width / 2;
        //var screenCenterY = this.physics.world.bounds.height / 2;            
        this.add.text(420, 5, TITLE_MENU_TEXT, {fontFamily: 'Arial', color: '#ffffff',fontSize: '32px'});
        this.add.text(5, 5, 'BlockAr', {fontFamily: 'Arial', color: '#ffffff',fontSize: '32px'});
            
        var distance = 120;
        var config1 = {
            x: 420,
            y: 50,
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

        var config2 = {
            x: 420,
            y: 50,
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
                backgroundColor: '#33FF6E',            
            }
        };
           
        let lv1Click;
        let lv2_1Click;
        let lv2_2Click;
        let lv2Click;
        let lv5_1Click;
        let lv3Click;
        let lv4Click;
        let x = 420;
        let y;

        if(scoreLevels[1].attempts>0){
            config2.text = '1';
            lv1Click = this.make.text(config2).setInteractive();
        }else{
            config1.text = '1';
            lv1Click = this.make.text(config1).setInteractive();
        }

        x = x + distance;
        if(scoreLevels[2].attempts>0){
            config2.x = x;        
            config2.text = '2';
            lv2_1Click = this.make.text(config2).setInteractive();
        }else{
            config1.x = x;        
            config1.text = '2';
            lv2_1Click = this.make.text(config1).setInteractive();
        }

        x = x + distance;
        if(scoreLevels[3].attempts>0){
            config2.x = x;        
            config2.text = '3';        
            lv2_2Click = this.make.text(config2).setInteractive();            
        }else{
            config1.x = x;        
            config1.text = '3';        
            lv2_2Click = this.make.text(config1).setInteractive();  
        }            
            
        x = 420;
        y = 180;
        if(scoreLevels[4].attempts>0){
            config2.x = 420;        
            config2.text = '4';
            config2.y = y;        
            lv2Click = this.make.text(config2).setInteractive();          
        }else{
            config1.x = 420;        
            config1.text = '4';
            config1.y = y;        
            lv2Click = this.make.text(config1).setInteractive(); 
        }     
        
        x = x + distance;
        if(scoreLevels[5].attempts>0){
            config2.x = x; 
            config2.y = y;        
            config2.text = '5';        
            lv5_1Click = this.make.text(config2).setInteractive();          
        }else{
            config1.x = x;    
            config1.y = y;      
            config1.text = '5';        
            lv5_1Click = this.make.text(config1).setInteractive();
        }     
        
        x = x + distance;
        if(scoreLevels[6].attempts>0){
            config2.x = x;   
            config2.y = y;       
            config2.text = '6';        
            lv3Click = this.make.text(config2).setInteractive();     
        }else{
            config1.x = x;  
            config1.y = y;        
            config1.text = '6';        
            lv3Click = this.make.text(config1).setInteractive();
        }                      
    
        if(scoreLevels[7].attempts>0){
            config2.x = 420;        
            config2.y = y + 130;     
            config2.text = '7';        
            lv4Click = this.make.text(config2).setInteractive();  
        }else{
            config1.x = 420;        
            config1.y = y + 130;     
            config1.text = '7';        
            lv4Click = this.make.text(config1).setInteractive();
        } 
        
        // Reseteo score a un valor distinto de 'menu' con score = 'menu' indico que vengo a esta clase.
        score = '1';  
        attempts = 0;
        beginScene = true;
        cantBlocks = 1;
        resetConfig();
        hideBlocks();                                                    
        
        addPointsTotal();
        
        lv1Click.on('pointerdown', function(){                           
            inject_blockly();                                                  
            showCategoriesLv1();
            levelCurrent = 1;
            this.updateAttempts();                                                
            this.scene.start('scene1');    
        }, this);        

        lv2_1Click.on('pointerdown', function(){   
            inject_blockly(5);                
            showCategoriesLv2_1();
            levelCurrent = 2;
            this.updateAttempts();                                                             
            this.scene.start('scene2_1');    
        }, this);

        lv2_2Click.on('pointerdown', function(){   
            inject_blockly(9);                
            showCategoriesLv2();
            levelCurrent = 3;
            this.updateAttempts();                                                             
            this.scene.start('scene2_2');    
        }, this);

        lv2Click.on('pointerdown', function(){   
            inject_blockly(11);                
            showCategoriesLv2();
            levelCurrent = 4; 
            this.updateAttempts();                                                                        
            this.scene.start('scene2');    
        }, this);

        lv5_1Click.on('pointerdown', function(){
            inject_blockly(17);            
            showCategoriesLv5_1(); 
            levelCurrent = 5;
            this.updateAttempts();                
            this.scene.start('scene5_1');   
        }, this);
        
        lv3Click.on('pointerdown', function(){
            inject_blockly();            
            showCategoriesLv3();
            levelCurrent = 6; 
            this.updateAttempts();                  
            this.scene.start('scene3');   
        }, this);

        lv4Click.on('pointerdown', function(){
            inject_blockly();            
            showCategoriesLv4();
            levelCurrent = 7; 
            this.updateAttempts();                
            this.scene.start('scene4');   
        }, this);
        
    }

    updateAttempts(){                
        document.getElementById("blocklyTextId2").value = POINT_OBJETIVE_TEXT+'\n'+ATTEMPTS_TEXT+scoreLevels[levelCurrent].attempts+'\n\n'+POINT_FOR_ATTEMPTS+scoreLevels[levelCurrent].points;        
    }
    
    }