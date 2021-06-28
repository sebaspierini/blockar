Blockly.JavaScript['move_right'] = function(block) {
  var code = 'ir_a_derecha();\n';
  return code;
};

function initInterpreterGoRight(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('ir_a_derecha');
   var wrapper = interpreter.createAsyncFunction(    
    function(callback) {
      spriteRight();
      timeline.play();      
      setTimeout(function(){ 
        timeline.destroy();
        timeline = yo.tweens.createTimeline();
        callback(); 
      },  tiempoSprite);            
    });   
  interpreter.setProperty(scope, 'ir_a_derecha', wrapper);
}

Blockly.JavaScript['move_left'] = function(block) {
  var code = 'ir_a_izquierda();\n'; 
  return code;
};

function initInterpreterGoLeft(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('ir_a_izquierda');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteLeft();
      timeline.play();      
      setTimeout(function(){ 
        timeline.destroy();
        timeline = yo.tweens.createTimeline();
        callback(); 
      },  tiempoSprite);            
    }); 
  interpreter.setProperty(scope, 'ir_a_izquierda', wrapper);
}

Blockly.JavaScript['move_up'] = function(block) {
  var code = 'subir();\n'; 
  return code;
};

function initInterpreterGoUp(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('subir');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteUp();
      timeline.play();      
      setTimeout(function(){ 
        timeline.destroy();
        timeline = yo.tweens.createTimeline();
        callback(); 
      },  tiempoSprite);            
    }); 
  interpreter.setProperty(scope, 'subir', wrapper);
}

Blockly.JavaScript['move_down'] = function(block) {
  var code = 'bajar();\n'; 
  return code;
};

function initInterpreterGoDown(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('bajar');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteDown();
      timeline.play();      
      setTimeout(function(){ 
        timeline.destroy();
        timeline = yo.tweens.createTimeline();
        callback(); 
      },  tiempoSprite);            
    }); 
  interpreter.setProperty(scope, 'bajar', wrapper);
}

Blockly.JavaScript['get_element'] = function(block) {  
  var code = 'tomar_elemento();\n';
  return code;
};

function initInterpreterGetElement(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('tomar_elemento');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteGetElement();
      //timeline.play();      
      /* setTimeout(function(){ 
        timeline.destroy();
        timeline = yo.tweens.createTimeline();
        callback(); 
      },  tiempoSprite); */            
    }); 
  interpreter.setProperty(scope, 'tomar_elemento', wrapper);
}

/* Blockly.JavaScript['there_is_element'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'true';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
}; */