const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { SystemRestfulInteractionSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestInteractionSchema } = require('./allSchemaHeaders.js');

CapabilityStatementRestInteractionSchema.add(BackboneElementSchema);
CapabilityStatementRestInteractionSchema.remove('id');
CapabilityStatementRestInteractionSchema.add({
  code: SystemRestfulInteractionSchema,
  documentation: PrimitiveMarkdownSchema,
});

module.exports.CapabilityStatementRestInteractionSchema = CapabilityStatementRestInteractionSchema;
