const { ElementSchema } = require('./Element');
const { StructureMapSourceListModeSchema } = require('./allSchemaHeaders.js');

StructureMapSourceListModeSchema.add(ElementSchema);
StructureMapSourceListModeSchema.remove('id');
StructureMapSourceListModeSchema.add({
  value: String,
});

module.exports.StructureMapSourceListModeSchema = StructureMapSourceListModeSchema;
