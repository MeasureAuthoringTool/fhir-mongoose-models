const { BackboneElementSchema } = require('./BackboneElement');
const { CapabilityStatementMessagingEndpointSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementMessagingSupportedMessageSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementMessagingSchema } = require('./allSchemaHeaders.js');

CapabilityStatementMessagingSchema.add(BackboneElementSchema);
CapabilityStatementMessagingSchema.remove('id');
CapabilityStatementMessagingSchema.add({
  endpoint: [CapabilityStatementMessagingEndpointSchema],
  reliableCache: PrimitiveUnsignedIntSchema,
  documentation: PrimitiveMarkdownSchema,
  supportedMessage: [CapabilityStatementMessagingSupportedMessageSchema],
});

module.exports.CapabilityStatementMessagingSchema = CapabilityStatementMessagingSchema;
