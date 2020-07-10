const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestSecuritySchema } = require('./allSchemaHeaders.js');

CapabilityStatementRestSecuritySchema.add(BackboneElementSchema);
CapabilityStatementRestSecuritySchema.remove('id');
CapabilityStatementRestSecuritySchema.add({
  cors: PrimitiveBooleanSchema,
  service: [CodeableConceptSchema],
  description: PrimitiveMarkdownSchema,
});

module.exports.CapabilityStatementRestSecuritySchema = CapabilityStatementRestSecuritySchema;
