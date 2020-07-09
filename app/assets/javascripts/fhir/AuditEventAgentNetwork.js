const { AuditEventAgentNetworkTypeSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { AuditEventAgentNetworkSchema } = require('./allSchemaHeaders.js');

AuditEventAgentNetworkSchema.add(BackboneElementSchema);
AuditEventAgentNetworkSchema.remove('id');
AuditEventAgentNetworkSchema.add({
  address: PrimitiveStringSchema,
  type: AuditEventAgentNetworkTypeSchema,
});

module.exports.AuditEventAgentNetworkSchema = AuditEventAgentNetworkSchema;
