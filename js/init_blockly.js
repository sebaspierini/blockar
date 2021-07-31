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
    initInterpreterGetPc(interpreter, scope);
    initInterpreterPutInShop(interpreter, scope);
}

function highlightBlock(id) {
    demoWorkspace.highlightBlock(id);    
  }

function resetStepUi() {
    demoWorkspace.highlightBlock(null);  
}

function generateCodeAndLoadIntoInterpreter(event) {
    
    // Probar de meter el resultado en un array separado por ; y devolver todos los textos que no contienen highlightblock pueden ser los indices impares. Ver que pasa cuando hay un for.     
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';    
    Blockly.JavaScript.addReservedWords('highlightBlock');

    // Genera codigo JavaScript y lo parsea.
    latestCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);    
    
    codeBlockly = latestCode;

    let arrayCode = codeBlockly.split("\n");
       
    arrayCode.splice(-1, 1); 
    arrayCode.splice(0, 1);   

    arrayCode.forEach(function(element,index){
         
        if(element.includes("highlightBlock(")){
            
            arrayCode.splice(index, 1);
            
        }
    });
    
    codeBlockly = arrayCode.join("\n");

    if(buttonSelect === 2){
        document.getElementById("blocklyTextId").value = BEGIN_CODE_TEXT+codeBlockly+END_CODE_TEXT; 
    }
                     
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

function inject_blockly(maxBlocks = 0){

    showBlocks(); 

    if(maxBlocks === 0){
        // Inyecta un editor Blockly en el elemento contenedor especificado
        demoWorkspace = Blockly.inject('blocklyDiv',
        {           
        toolbox: document.getElementById('toolbox'), 
        grid:
            {spacing: 0,
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
    }else{
        // Inyecta un editor Blockly en el elemento contenedor especificado
        demoWorkspace = Blockly.inject('blocklyDiv',
        {   
        maxBlocks: maxBlocks,   // define la cantidad de bloques que se pueden usar
        toolbox: document.getElementById('toolbox'), 
        grid:
            {spacing: 0,
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
    }
    
    // Decodifica un DOM XML y crea bloques en el espacio de trabajo
    Blockly.Xml.domToWorkspace(document.getElementById('toolbox'),
        demoWorkspace);             

    demoWorkspace.setTheme(theme);      
        
    demoWorkspace.addChangeListener(function (event) {
        if (!(event instanceof Blockly.Events.Ui)) {
            demoWorkspace.addChangeListener(Blockly.Events.disableOrphans);
            resetInterpreter();
            generateCodeAndLoadIntoInterpreter(event);        
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
    //demoWorkspace.getToolbox().getToolboxItemById('start_blocks').hide();
    demoWorkspace.getToolbox().getToolboxItemById('movement_sprite').hide();
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite').hide();    
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite_lv2').hide(); 
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
    demoWorkspace.getToolbox().getToolboxItemById('function_sprite_lv2').show(); 
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