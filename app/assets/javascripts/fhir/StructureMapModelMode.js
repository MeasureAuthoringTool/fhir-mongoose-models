const { ElementSchema } = require('./Element');
const { StructureMapModelModeSchema } = require('./allSchemaHeaders.js');

StructureMapModelModeSchema.add(ElementSchema);
StructureMapModelModeSchema.remove('id');
StructureMapModelModeSchema.add({
  value: String,
});

module.exports.StructureMapModelModeSchema = StructureMapModelModeSchema;
