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
          .appendField("Tomar celular");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['get_element'] = function(block) {  
    var code = 'tomar_celular();\n';
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

  Blockly.Blocks['get_memory'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Tomar memoria");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['get_memory'] = function(block) {  
    var code = 'tomar_memoria();\n';
    return code;
  };
  
  Blockly.Blocks['get_disk'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Tomar disco");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['get_disk'] = function(block) {  
    var code = 'tomar_disco();\n';
    return code;
  };

  Blockly.Blocks['put_element_lv3'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Colocar hardware en placa madre");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['put_element_lv3'] = function(block) {  
    var code = 'colocar_hardware_en_placa_madre();\n';
    return code;
  };