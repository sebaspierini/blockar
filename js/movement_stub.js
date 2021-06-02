Blockly.JavaScript['move_right'] = function(block) {
  var code = 'goRightBlock();\n';
  return code;
};

function initInterpreterGoRight(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('goRightBlock');
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
  interpreter.setProperty(scope, 'goRightBlock', wrapper);
}

Blockly.JavaScript['move_left'] = function(block) {
  var code = 'goLeftBlock();\n'; 
  return code;
};

function initInterpreterGoLeft(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('goLeftBlock');
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
  interpreter.setProperty(scope, 'goLeftBlock', wrapper);
}

Blockly.JavaScript['move_up'] = function(block) {
  var code = 'goUpBlock();\n'; 
  return code;
};

function initInterpreterGoUp(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('goUpBlock');
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
  interpreter.setProperty(scope, 'goUpBlock', wrapper);
}

Blockly.JavaScript['move_down'] = function(block) {
  var code = 'goDownBlock();\n'; 
  return code;
};

function initInterpreterGoDown(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('goDownBlock');
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
  interpreter.setProperty(scope, 'goDownBlock', wrapper);
}