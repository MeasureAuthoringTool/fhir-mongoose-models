const mongoose = require('mongoose/browser');
const { AgeSchema } = require('./Age');
const { AllergyIntoleranceCategorySchema } = require('./AllergyIntoleranceCategory');
const { AllergyIntoleranceCriticalitySchema } = require('./AllergyIntoleranceCriticality');
const { AllergyIntoleranceReactionSchema } = require('./AllergyIntoleranceReaction');
const { AllergyIntoleranceTypeSchema } = require('./AllergyIntoleranceType');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');

const AllergyIntoleranceSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  clinicalStatus: CodeableConceptSchema,
  verificationStatus: CodeableConceptSchema,
  type: AllergyIntoleranceTypeSchema,
  category: [AllergyIntoleranceCategorySchema],
  criticality: AllergyIntoleranceCriticalitySchema,
  code: CodeableConceptSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  onsetDateTime: PrimitiveDateTimeSchema,
  onsetAge: AgeSchema,
  onsetPeriod: PeriodSchema,
  onsetRange: RangeSchema,
  onsetString: PrimitiveStringSchema,
  recordedDate: PrimitiveDateTimeSchema,
  recorder: ReferenceSchema,
  asserter: ReferenceSchema,
  lastOccurrence: PrimitiveDateTimeSchema,
  note: [AnnotationSchema],
  reaction: [AllergyIntoleranceReactionSchema],
  typeName: { type: String, default: 'AllergyIntolerance' },
  _type: { type: String, default: 'FHIR::AllergyIntolerance' },
});

class AllergyIntolerance extends mongoose.Document {
  constructor(object) {
    super(object, AllergyIntoleranceSchema);
    this.typeName = 'AllergyIntolerance';
    this._type = 'FHIR::AllergyIntolerance';
  }
}

module.exports.AllergyIntoleranceSchema = AllergyIntoleranceSchema;
module.exports.AllergyIntolerance = AllergyIntolerance;
