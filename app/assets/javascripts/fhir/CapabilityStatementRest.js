const { BackboneElementSchema } = require('./BackboneElement');
const { CapabilityStatementRestInteractionSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceOperationSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceSearchParamSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestSecuritySchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { RestfulCapabilityModeSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestSchema } = require('./allSchemaHeaders.js');

CapabilityStatementRestSchema.add(BackboneElementSchema);
CapabilityStatementRestSchema.remove('id');
CapabilityStatementRestSchema.add({
  mode: RestfulCapabilityModeSchema,
  documentation: PrimitiveMarkdownSchema,
  security: CapabilityStatementRestSecuritySchema,
  resource: [CapabilityStatementRestResourceSchema],
  interaction: [CapabilityStatementRestInteractionSchema],
  searchParam: [CapabilityStatementRestResourceSearchParamSchema],
  operation: [CapabilityStatementRestResourceOperationSchema],
  compartment: [PrimitiveCanonicalSchema],
});

module.exports.CapabilityStatementRestSchema = CapabilityStatementRestSchema;
