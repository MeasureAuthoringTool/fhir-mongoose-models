const { ElementSchema } = require('./Element');
const { ExtensionSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./allSchemaHeaders.js');

BackboneElementSchema.add(ElementSchema);
BackboneElementSchema.remove('id');
BackboneElementSchema.add({
  modifierExtension: [ExtensionSchema],
});

module.exports.BackboneElementSchema = BackboneElementSchema;
