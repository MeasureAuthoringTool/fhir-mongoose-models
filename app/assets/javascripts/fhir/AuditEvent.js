const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AuditEventActionSchema } = require('./AuditEventAction');
const { AuditEventAgentSchema } = require('./AuditEventAgent');
const { AuditEventEntitySchema } = require('./AuditEventEntity');
const { AuditEventOutcomeSchema } = require('./AuditEventOutcome');
const { AuditEventSourceSchema } = require('./AuditEventSource');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { DomainResourceSchema } = require('./DomainResource');
const { PeriodSchema } = require('./Period');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AuditEventSchema = DomainResourceSchemaFunction({
   type : CodingSchema,
   subtype : [CodingSchema],
   action : AuditEventActionSchema,
   period : PeriodSchema,
   recorded : DateTime,
   outcome : AuditEventOutcomeSchema,
   outcomeDesc : String,
   purposeOfEvent : [CodeableConceptSchema],
   agent : [AuditEventAgentSchema],
   source : AuditEventSourceSchema,
   entity : [AuditEventEntitySchema],
   fhirTitle: { type: String, default: 'AuditEvent' },
});

class AuditEvent extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventSchema);
    this._type = 'FHIR::AuditEvent';
  }
};


module.exports.AuditEventSchema = AuditEventSchema;
module.exports.AuditEvent = AuditEvent;
