const { ElementSchema } = require('./Element');
const { StructureMapTargetListModeSchema } = require('./allSchemaHeaders.js');

StructureMapTargetListModeSchema.add(ElementSchema);
StructureMapTargetListModeSchema.remove('id');
StructureMapTargetListModeSchema.add({
  value: String,
});

module.exports.StructureMapTargetListModeSchema = StructureMapTargetListModeSchema;
