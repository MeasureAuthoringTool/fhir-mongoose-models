const mongoose = require('mongoose/browser');
const { AdverseEventActualitySchema } = require('./AdverseEventActuality');
const { AdverseEventSuspectEntitySchema } = require('./AdverseEventSuspectEntity');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const AdverseEventSchema = DomainResourceSchemaFunction({
  identifier: IdentifierSchema,
  actuality: AdverseEventActualitySchema,
  category: [CodeableConceptSchema],
  event: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  detected: PrimitiveDateTimeSchema,
  recordedDate: PrimitiveDateTimeSchema,
  resultingCondition: [ReferenceSchema],
  location: ReferenceSchema,
  seriousness: CodeableConceptSchema,
  severity: CodeableConceptSchema,
  outcome: CodeableConceptSchema,
  recorder: ReferenceSchema,
  contributor: [ReferenceSchema],
  suspectEntity: [AdverseEventSuspectEntitySchema],
  subjectMedicalHistory: [ReferenceSchema],
  referenceDocument: [ReferenceSchema],
  study: [ReferenceSchema],
  typeName: { type: String, default: 'AdverseEvent' },
  _type: { type: String, default: 'FHIR::AdverseEvent' },
});

class AdverseEvent extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventSchema);
    this.typeName = 'AdverseEvent';
    this._type = 'FHIR::AdverseEvent';
  }
}

module.exports.AdverseEventSchema = AdverseEventSchema;
module.exports.AdverseEvent = AdverseEvent;
