function initApi(interpreter, scope) {
    var wrapper = function (text) {
      text = text ? text.toString() : '';
      console.log(text);
    };
    interpreter.setProperty(scope, 'alert',
      interpreter.createNativeFunction(wrapper));

    var wrapper = function (text) {
      text = text ? text.toString() : '';
      return interpreter.createPrimitive(1);
    };
    interpreter.setProperty(scope, 'prompt',
      interpreter.createNativeFunction(wrapper));
    
    initInterpreterGoRight(interpreter, scope);
    initInterpreterGoLeft(interpreter, scope);

    var wrapper = function (id) {
      id = id ? id.toString() : '';
      return interpreter.createPrimitive(highlightBlock(id));
    };
    interpreter.setProperty(scope, 'highlightBlock',
      interpreter.createNativeFunction(wrapper));

  }

function highlightBlock(id) {
    demoWorkspace.highlightBlock(id);
  }

  function resetStepUi() {
    demoWorkspace.highlightBlock(null);      
  }

  function generateCodeAndLoadIntoInterpreter() {
    // Generate JavaScript code and parse it.
    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    latestCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);

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

  var demoWorkspace = Blockly.inject('blocklyDiv',
    {        
      toolbox: document.getElementById('toolbox')
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