var myInterpreter = null;
var runner;
var demoWorkspace;
var latestCode = '';


function initApi(interpreter, scope) {
    
    initInterpreterGoRight(interpreter, scope);
    initInterpreterGoLeft(interpreter, scope);
    initInterpreterGoUp(interpreter, scope);
    initInterpreterGoDown(interpreter, scope);

}

function resetStepUi() {
    demoWorkspace.highlightBlock(null);      
}

function generateCodeAndLoadIntoInterpreter() {
    // Generate JavaScript code and parse it.
    latestCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);
    document.getElementById("blocklyTextId").value = latestCode;      
    resetStepUi();
}

function resetInterpreter() {
    myInterpreter = null;
    if (runner) {
    clearTimeout(runner);
    runner = null;
    }
}

function runCode() {
    if (!myInterpreter) {
    // First statement of this code.
    // Clear the program output.
    resetStepUi();        

    // And then show generated code in an alert.
    // In a timeout to allow the outputArea.value to reset first.
    setTimeout(function () {


        // Begin execution
        //highlightPause = false;
        myInterpreter = new Interpreter(latestCode, initApi);
        runner = function () {
        if (myInterpreter) {
            var hasMore = myInterpreter.run();
            if (hasMore) {
            // Execution is currently blocked by some async call.
            // Try again later.
            setTimeout(runner, 10);
            } else {
            // Program is complete.
            //outputArea.value += '\n\n<< Program complete >>';
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
    
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
        demoWorkspace);    
    Blockly.JavaScript.addReservedWords('exit');

    // Load the interpreter now, and upon future changes.
    generateCodeAndLoadIntoInterpreter();
    demoWorkspace.addChangeListener(function (event) {
        if (!(event instanceof Blockly.Events.Ui)) {
        // Something changed. Parser needs to be reloaded.
        resetInterpreter();
        generateCodeAndLoadIntoInterpreter();
        }
    });
}
