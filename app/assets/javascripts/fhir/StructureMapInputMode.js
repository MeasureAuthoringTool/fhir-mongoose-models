const { ElementSchema } = require('./Element');
const { StructureMapInputModeSchema } = require('./allSchemaHeaders.js');

StructureMapInputModeSchema.add(ElementSchema);
StructureMapInputModeSchema.remove('id');
StructureMapInputModeSchema.add({
  value: String,
});

module.exports.StructureMapInputModeSchema = StructureMapInputModeSchema;
