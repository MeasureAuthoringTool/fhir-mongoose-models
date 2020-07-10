const { ElementSchema } = require('./Element');
const { StructureMapTransformSchema } = require('./allSchemaHeaders.js');

StructureMapTransformSchema.add(ElementSchema);
StructureMapTransformSchema.remove('id');
StructureMapTransformSchema.add({
  value: String,
});

module.exports.StructureMapTransformSchema = StructureMapTransformSchema;
