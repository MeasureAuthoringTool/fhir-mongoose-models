const { ElementSchema } = require('./Element');
const { AuditEventActionSchema } = require('./allSchemaHeaders.js');

AuditEventActionSchema.add(ElementSchema);
AuditEventActionSchema.remove('id');
AuditEventActionSchema.add({
  value: String,
});

module.exports.AuditEventActionSchema = AuditEventActionSchema;
