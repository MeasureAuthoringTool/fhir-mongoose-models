const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionMappingSchema } = require('./allSchemaHeaders.js');

StructureDefinitionMappingSchema.add(BackboneElementSchema);
StructureDefinitionMappingSchema.remove('id');
StructureDefinitionMappingSchema.add({
  identity: PrimitiveIdSchema,
  uri: PrimitiveUriSchema,
  name: PrimitiveStringSchema,
  comment: PrimitiveStringSchema,
});

module.exports.StructureDefinitionMappingSchema = StructureDefinitionMappingSchema;
