const { ElementSchema } = require('./Element');
const { AuditEventAgentNetworkTypeSchema } = require('./allSchemaHeaders.js');

AuditEventAgentNetworkTypeSchema.add(ElementSchema);
AuditEventAgentNetworkTypeSchema.remove('id');
AuditEventAgentNetworkTypeSchema.add({
  value: String,
});

module.exports.AuditEventAgentNetworkTypeSchema = AuditEventAgentNetworkTypeSchema;
