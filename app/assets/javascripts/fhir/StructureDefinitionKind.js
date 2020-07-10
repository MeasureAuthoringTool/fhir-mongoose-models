const { ElementSchema } = require('./Element');
const { StructureDefinitionKindSchema } = require('./allSchemaHeaders.js');

StructureDefinitionKindSchema.add(ElementSchema);
StructureDefinitionKindSchema.remove('id');
StructureDefinitionKindSchema.add({
  value: String,
});

module.exports.StructureDefinitionKindSchema = StructureDefinitionKindSchema;
