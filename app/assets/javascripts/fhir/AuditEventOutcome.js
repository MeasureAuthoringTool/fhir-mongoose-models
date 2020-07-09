const { ElementSchema } = require('./Element');
const { AuditEventOutcomeSchema } = require('./allSchemaHeaders.js');

AuditEventOutcomeSchema.add(ElementSchema);
AuditEventOutcomeSchema.remove('id');
AuditEventOutcomeSchema.add({
  value: String,
});

module.exports.AuditEventOutcomeSchema = AuditEventOutcomeSchema;
