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
      },  timeSprite);            
    });   
  interpreter.setProperty(scope, 'ir_a_derecha', wrapper);
}

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
      },  timeSprite);            
    }); 
  interpreter.setProperty(scope, 'ir_a_izquierda', wrapper);
}

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
      },  timeSprite);            
    }); 
  interpreter.setProperty(scope, 'subir', wrapper);
}

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
      },  timeSprite);            
    }); 
  interpreter.setProperty(scope, 'bajar', wrapper);
}

function initInterpreterGetElement(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('tomar_estrella');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteGetElement(); 
      // necesito definir el tiempo para cortar la ejecucion del bloque actual para pasar al siguiente bloque y resetear el interpreter para avanzar.
      setTimeout(function(){         
        callback(); 
      },  0);  // lo pongo en 0 para que corte rápido.
                
    }); 
  interpreter.setProperty(scope, 'tomar_estrella', wrapper);
}

function initInterpreterDefuseBomb(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('desactivar_bomba');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteDefuseBomb(); 
      // necesito definir el tiempo para cortar la ejecucion del bloque actual para pasar al siguiente bloque y resetear el interpreter para avanzar.
      setTimeout(function(){         
        callback(); 
      },  0);  // lo pongo en 0 para que corte rápido.
                
    }); 
  interpreter.setProperty(scope, 'desactivar_bomba', wrapper);
}

function initInterpreterThereIsBomb(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('hay_bomba');
    var wrapper = interpreter.createAsyncFunction(function() 
    {        
        return interpreter.createPrimitive(thereIsBomb);
      }); 
    interpreter.setProperty(scope, 'hay_bomba', wrapper);
}