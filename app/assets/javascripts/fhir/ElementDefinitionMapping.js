const { ElementSchema } = require('./Element');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ElementDefinitionMappingSchema } = require('./allSchemaHeaders.js');

ElementDefinitionMappingSchema.add(ElementSchema);
ElementDefinitionMappingSchema.remove('id');
ElementDefinitionMappingSchema.add({
  identity: PrimitiveIdSchema,
  language: MimeTypeSchema,
  map: PrimitiveStringSchema,
  comment: PrimitiveStringSchema,
});

module.exports.ElementDefinitionMappingSchema = ElementDefinitionMappingSchema;
