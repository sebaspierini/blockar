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
  Blockly.JavaScript.addReservedWords('tomar_celular');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteGetElement(); 
      // necesito definir el tiempo para cortar la ejecucion del bloque actual para pasar al siguiente bloque y resetear el interpreter para avanzar.
      setTimeout(function(){         
        callback(); 
      },  0);  // lo pongo en 0 para que corte rápido.
                
    }); 
  interpreter.setProperty(scope, 'tomar_celular', wrapper);
}

function initInterpreterDefuseBomb(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('desactivar_servidor');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      spriteDefuseBomb(); 
      // necesito definir el tiempo para cortar la ejecucion del bloque actual para pasar al siguiente bloque y resetear el interpreter para avanzar.
      setTimeout(function(){         
        callback(); 
      },  0);  // lo pongo en 0 para que corte rápido.
                
    }); 
  interpreter.setProperty(scope, 'desactivar_servidor', wrapper);
}

function initInterpreterThereIsBomb(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('hay_servidor');
  var wrapper = function(){
    return interpreter.createPrimitive(thereIsBomb);
  }
  interpreter.setProperty(scope,'hay_servidor',interpreter.createNativeFunction(wrapper));
}

function initInterpreterGetMemory(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('tomar_memoria');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      getMemory();
      setTimeout(function(){         
        callback(); 
      },  0);            
    }); 
  interpreter.setProperty(scope, 'tomar_memoria', wrapper);
}

function initInterpreterGetDisk(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('tomar_disco');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      getDisk();
      setTimeout(function(){         
        callback(); 
      },  0);            
    }); 
  interpreter.setProperty(scope, 'tomar_disco', wrapper);
}

function initInterpreterPutInPc(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('colocar_hardware_en_placa_madre');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      putInPc();
      setTimeout(function(){         
        callback(); 
      },  0);            
    }); 
  interpreter.setProperty(scope, 'colocar_hardware_en_placa_madre', wrapper);
}

function initInterpreterGetPc(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('tomar_pc');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      getPc();
      setTimeout(function(){         
        callback(); 
      },  0);            
    }); 
  interpreter.setProperty(scope, 'tomar_pc', wrapper);
}

function initInterpreterPutInShop(interpreter, scope) {
  Blockly.JavaScript.addReservedWords('colocar_pc_en_tienda');
  var wrapper = interpreter.createAsyncFunction(
    function(callback) {
      putInShop();
      setTimeout(function(){         
        callback(); 
      },  0);            
    }); 
  interpreter.setProperty(scope, 'colocar_pc_en_tienda', wrapper);
}
