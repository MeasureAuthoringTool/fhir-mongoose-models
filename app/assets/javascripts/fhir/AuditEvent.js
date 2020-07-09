const { AuditEventActionSchema } = require('./allSchemaHeaders.js');
const { AuditEventAgentSchema } = require('./allSchemaHeaders.js');
const { AuditEventEntitySchema } = require('./allSchemaHeaders.js');
const { AuditEventOutcomeSchema } = require('./allSchemaHeaders.js');
const { AuditEventSourceSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { AuditEventSchema } = require('./allSchemaHeaders.js');

AuditEventSchema.add(DomainResourceSchema);
AuditEventSchema.remove('id');
AuditEventSchema.add({
  type: CodingSchema,
  subtype: [CodingSchema],
  action: AuditEventActionSchema,
  period: PeriodSchema,
  recorded: PrimitiveInstantSchema,
  outcome: AuditEventOutcomeSchema,
  outcomeDesc: PrimitiveStringSchema,
  purposeOfEvent: [CodeableConceptSchema],
  agent: [AuditEventAgentSchema],
  source: AuditEventSourceSchema,
  entity: [AuditEventEntitySchema],
});

module.exports.AuditEventSchema = AuditEventSchema;
