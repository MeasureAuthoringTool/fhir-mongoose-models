const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementMessagingEndpointSchema } = require('./allSchemaHeaders.js');

CapabilityStatementMessagingEndpointSchema.add(BackboneElementSchema);
CapabilityStatementMessagingEndpointSchema.remove('id');
CapabilityStatementMessagingEndpointSchema.add({
  protocol: CodingSchema,
  address: PrimitiveUrlSchema,
});

module.exports.CapabilityStatementMessagingEndpointSchema = CapabilityStatementMessagingEndpointSchema;
