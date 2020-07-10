const { BackboneElementSchema } = require('./BackboneElement');
const { ExtensionContextTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionContextSchema } = require('./allSchemaHeaders.js');

StructureDefinitionContextSchema.add(BackboneElementSchema);
StructureDefinitionContextSchema.remove('id');
StructureDefinitionContextSchema.add({
  type: ExtensionContextTypeSchema,
  expression: PrimitiveStringSchema,
});

module.exports.StructureDefinitionContextSchema = StructureDefinitionContextSchema;
