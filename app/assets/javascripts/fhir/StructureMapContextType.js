const { ElementSchema } = require('./Element');
const { StructureMapContextTypeSchema } = require('./allSchemaHeaders.js');

StructureMapContextTypeSchema.add(ElementSchema);
StructureMapContextTypeSchema.remove('id');
StructureMapContextTypeSchema.add({
  value: String,
});

module.exports.StructureMapContextTypeSchema = StructureMapContextTypeSchema;
