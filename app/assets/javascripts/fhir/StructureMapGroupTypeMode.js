const { ElementSchema } = require('./Element');
const { StructureMapGroupTypeModeSchema } = require('./allSchemaHeaders.js');

StructureMapGroupTypeModeSchema.add(ElementSchema);
StructureMapGroupTypeModeSchema.remove('id');
StructureMapGroupTypeModeSchema.add({
  value: String,
});

module.exports.StructureMapGroupTypeModeSchema = StructureMapGroupTypeModeSchema;
