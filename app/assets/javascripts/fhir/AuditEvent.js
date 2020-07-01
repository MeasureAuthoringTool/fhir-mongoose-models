const mongoose = require('mongoose/browser');
const { AuditEventActionSchema } = require('./AuditEventAction');
const { AuditEventAgentSchema } = require('./AuditEventAgent');
const { AuditEventEntitySchema } = require('./AuditEventEntity');
const { AuditEventOutcomeSchema } = require('./AuditEventOutcome');
const { AuditEventSourceSchema } = require('./AuditEventSource');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PeriodSchema } = require('./Period');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const AuditEventSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'AuditEvent' },
  _type: { type: String, default: 'FHIR::AuditEvent' },
});

class AuditEvent extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventSchema);
    this.typeName = 'AuditEvent';
    this._type = 'FHIR::AuditEvent';
  }
}

module.exports.AuditEventSchema = AuditEventSchema;
module.exports.AuditEvent = AuditEvent;
