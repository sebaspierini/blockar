/* Generate blocks with https://blockly-demo.appspot.com/static/demos/blockfactory/index.html */

Blockly.Blocks['move_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ir a derecha");
    /*this.appendValueInput("shouldJump")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("jump?");*/
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
          .appendField("ir a izquierda");
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
          .appendField("subir");
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
          .appendField("bajar");
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
          .appendField("tomar_elemento");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

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