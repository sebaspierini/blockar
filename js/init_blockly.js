function initApi(interpreter, scope) {
    var wrapper = function(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(highlightBlock(id));
      };
      interpreter.setProperty(scope, 'highlightBlock',
          interpreter.createNativeFunction(wrapper));

    initInterpreterGoRight(interpreter, scope);
    initInterpreterGoLeft(interpreter, scope);
    initInterpreterGoUp(interpreter, scope);
    initInterpreterGoDown(interpreter, scope);
    initInterpreterGetElement(interpreter, scope);        
    initInterpreterDefuseBomb(interpreter, scope); 
    initInterpreterThereIsBomb(interpreter, scope);     
    initInterpreterGetMemory(interpreter, scope);
    initInterpreterGetDisk(interpreter, scope);
    initInterpreterPutInPc(interpreter, scope);
}

function highlightBlock(id) {
    demoWorkspace.highlightBlock(id);    
  }

function resetStepUi() {
    demoWorkspace.highlightBlock(null);  
}

function generateCodeAndLoadIntoInterpreter() {
    
    // Probar de meter el resultado en un array separado por ; y devolver todos los textos que no contienen highlightblock pueden ser los indices impares. Ver que pasa cuando hay un for. 
    //window.LoopTrap = 1000;
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    //Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');

    // Genera codigo JavaScript y lo parsea.
    latestCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);
        
    //document.getElementById("blocklyTextId").value = latestCode;         
         
    resetStepUi();
}

//Detiene la ejecución delos bloques
function resetInterpreter() {
    myInterpreter = null;
    if (runner) {        
        clearTimeout(runner);
        runner = null;
        endExcecution = true;
    }
}

function runCode() {
    
    if (!myInterpreter) {
    
        resetStepUi();        

        // And then show generated code in an alert.
        // In a timeout to allow the outputArea.value to reset first.
        setTimeout(function () {

            // Begin execution
            
            myInterpreter = new Interpreter(latestCode, initApi);
            
            runner = function () {
            if (myInterpreter) {
                var hasMore = myInterpreter.run();
                //console.log(hasMore);
                if (hasMore) {
                    // Execution is currently blocked by some async call.
                    // Try again later.
                    
                    setTimeout(runner, 10);
                } else {
                    // Program is complete.                    
                    resetInterpreter();
                    resetStepUi();
                }
            }
            };
            runner();
        }, 1);
        return;
    }
}

function inject_blockly(){
    // Inyecta un editor Blockly en el elemento contenedor especificado
    demoWorkspace = Blockly.inject('blocklyDiv',
    {        
    toolbox: document.getElementById('toolbox'), 
    grid:
        {spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true},            
    zoom:
        {controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 2,
            minScale: 0.6,
            scaleSpeed: 1.2},
    trashcan: true
    });    
    
    // Decodifica un DOM XML y crea bloques en el espacio de trabajo
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
        demoWorkspace);           
        
    // Indica que los bloques deben estar conectados para funcionar.    
    
    Blockly.JavaScript.addReservedWords('exit');
    
    // Load the interpreter now, and upon future changes.
    //generateCodeAndLoadIntoInterpreter();
    demoWorkspace.addChangeListener(function (event) {
        if (!(event instanceof Blockly.Events.Ui)) {
            
            // el siguiente metodo se utiliza para utilizar bloques conectados pero no logro comprender porque no ejecuta los bloques al tener esta opcion.
            //demoWorkspace.addChangeListener(Blockly.Events.disableOrphans(event));
            // Something changed. Parser needs to be reloaded.

            resetInterpreter();
            generateCodeAndLoadIntoInterpreter();
            
        }
    });
}

function hideBlocks(){
    $("#blocklyDiv").hide();
    $("#blocklyTextId").hide();
}

function showBlocks(){    
    $("#blocklyDiv").show();
    $("#blocklyTextId").show();
}

function hideCategories(){
    demoWorkspace.getToolbox().getToolboxItemById('movement_sprite').hide();
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite').hide();    
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite_lv3').hide(); 
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite_lv4').hide(); 
    demoWorkspace.getToolbox().getToolboxItemById('loop_for').hide();
    demoWorkspace.getToolbox().getToolboxItemById('logic').hide();
    demoWorkspace.getToolbox().getToolboxItemById('condition').hide();
    demoWorkspace.getToolbox().getToolboxItemById('math').hide();   
    demoWorkspace.getToolbox().getToolboxItemById('function').hide();    
}

function showCategoriesLv1(){
    hideCategories();
    demoWorkspace.getToolbox().getToolboxItemById('movement_sprite').show();
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite').show(); 
}

function showCategoriesLv2(){
    hideCategories();
    demoWorkspace.getToolbox().getToolboxItemById('movement_sprite').show();
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite').show(); 
    demoWorkspace.getToolbox().getToolboxItemById('loop_for').show();
}

function showCategoriesLv3(){
    hideCategories();
    demoWorkspace.getToolbox().getToolboxItemById('movement_sprite').show();
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite_lv3').show(); 
    demoWorkspace.getToolbox().getToolboxItemById('loop_for').show();
    demoWorkspace.getToolbox().getToolboxItemById('function').show(); 
}

function showCategoriesLv4(){
    hideCategories();
    demoWorkspace.getToolbox().getToolboxItemById('movement_sprite').show();
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite_lv4').show(); 
    demoWorkspace.getToolbox().getToolboxItemById('loop_for').show();
    demoWorkspace.getToolbox().getToolboxItemById('logic').show();
    demoWorkspace.getToolbox().getToolboxItemById('condition').show();
    demoWorkspace.getToolbox().getToolboxItemById('function').show(); 
}