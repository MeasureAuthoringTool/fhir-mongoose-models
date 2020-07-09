const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SearchParamTypeSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceSearchParamSchema } = require('./allSchemaHeaders.js');

CapabilityStatementRestResourceSearchParamSchema.add(BackboneElementSchema);
CapabilityStatementRestResourceSearchParamSchema.remove('id');
CapabilityStatementRestResourceSearchParamSchema.add({
  name: PrimitiveStringSchema,
  definition: PrimitiveCanonicalSchema,
  type: SearchParamTypeSchema,
  documentation: PrimitiveMarkdownSchema,
});

module.exports.CapabilityStatementRestResourceSearchParamSchema = CapabilityStatementRestResourceSearchParamSchema;
