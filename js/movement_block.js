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

  Blockly.Blocks['get_element'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Tomar elemento");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['block_cant_stars'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("Cantidad de estrellas"), "cantStars");
      this.setOutput(true, "Number");
      this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // Chequear tambien otra opcion para ver si hay estrellas

/*   Blockly.Blocks['there_is_element'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("hay_elemento");
      this.setOutput(true, "Boolean");
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  }; */