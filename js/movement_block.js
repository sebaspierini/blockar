/* Generate blocks with https://blockly-demo.appspot.com/static/demos/blockfactory/index.html */

Blockly.Blocks['move_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ir a derecha");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_right'] = function(block) {
  var code = 'ir_a_derecha();\n';
  return code;
};

Blockly.Blocks['move_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ir a izquierda");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['move_left'] = function(block) {
    var code = 'ir_a_izquierda();\n'; 
    return code;
  };

  Blockly.Blocks['move_up'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Subir");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['move_up'] = function(block) {
    var code = 'subir();\n'; 
    return code;
  };

  Blockly.Blocks['move_down'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Bajar");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  Blockly.JavaScript['move_down'] = function(block) {
    var code = 'bajar();\n'; 
    return code;
  };

  Blockly.Blocks['get_element'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Tomar estrella");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['get_element'] = function(block) {  
    var code = 'tomar_estrella();\n';
    return code;
  };

  Blockly.Blocks['defuse_bomb'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Desactivar bomba");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['defuse_bomb'] = function(block) {  
    var code = 'desactivar_bomba();\n';
    return code;
  };

  Blockly.Blocks['there_is_bomb'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("¿Hay bomba?"), "thereIsBomb");          
      this.setOutput(true, "Boolean");
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['there_is_bomb'] = function(block) {    
    var code = 'hay_bomba()';    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
