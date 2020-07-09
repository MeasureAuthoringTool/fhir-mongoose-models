const { BackboneElementSchema } = require('./BackboneElement');
const { EventCapabilityModeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementMessagingSupportedMessageSchema } = require('./allSchemaHeaders.js');

CapabilityStatementMessagingSupportedMessageSchema.add(BackboneElementSchema);
CapabilityStatementMessagingSupportedMessageSchema.remove('id');
CapabilityStatementMessagingSupportedMessageSchema.add({
  mode: EventCapabilityModeSchema,
  definition: PrimitiveCanonicalSchema,
});

module.exports.CapabilityStatementMessagingSupportedMessageSchema = CapabilityStatementMessagingSupportedMessageSchema;
