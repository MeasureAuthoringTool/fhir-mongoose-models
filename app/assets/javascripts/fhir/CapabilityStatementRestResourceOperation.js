const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceOperationSchema } = require('./allSchemaHeaders.js');

CapabilityStatementRestResourceOperationSchema.add(BackboneElementSchema);
CapabilityStatementRestResourceOperationSchema.remove('id');
CapabilityStatementRestResourceOperationSchema.add({
  name: PrimitiveStringSchema,
  definition: PrimitiveCanonicalSchema,
  documentation: PrimitiveMarkdownSchema,
});

module.exports.CapabilityStatementRestResourceOperationSchema = CapabilityStatementRestResourceOperationSchema;
