const { BackboneElementSchema } = require('./BackboneElement');
const { ElementDefinitionSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionDifferentialSchema } = require('./allSchemaHeaders.js');

StructureDefinitionDifferentialSchema.add(BackboneElementSchema);
StructureDefinitionDifferentialSchema.remove('id');
StructureDefinitionDifferentialSchema.add({
  element: [ElementDefinitionSchema],
});

module.exports.StructureDefinitionDifferentialSchema = StructureDefinitionDifferentialSchema;
