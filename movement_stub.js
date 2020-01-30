Blockly.JavaScript['move_right'] = function(block) {
  var code = 'goRightBlock();\n';
  return code;
};

function initInterpreterGoRight(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('goRightBlock');
   var wrapper = interpreter.createAsyncFunction(    
    function(callback) {
      spriteRight();
      console.log("paso");
      setTimeout(function(){ callback(); },  700);            
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
    function() {           
      spriteLeft();
    });
  interpreter.setProperty(scope, 'goLeftBlock', wrapper);
}