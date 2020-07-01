const mongoose = require('mongoose/browser');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ConditionEvidenceSchema } = require('./ConditionEvidence');
const { ConditionStageSchema } = require('./ConditionStage');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');

const ConditionSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  clinicalStatus: CodeableConceptSchema,
  verificationStatus: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  severity: CodeableConceptSchema,
  code: CodeableConceptSchema,
  bodySite: [CodeableConceptSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  onsetDateTime: PrimitiveDateTimeSchema,
  onsetAge: AgeSchema,
  onsetPeriod: PeriodSchema,
  onsetRange: RangeSchema,
  onsetString: PrimitiveStringSchema,
  abatementDateTime: PrimitiveDateTimeSchema,
  abatementAge: AgeSchema,
  abatementPeriod: PeriodSchema,
  abatementRange: RangeSchema,
  abatementString: PrimitiveStringSchema,
  recordedDate: PrimitiveDateTimeSchema,
  recorder: ReferenceSchema,
  asserter: ReferenceSchema,
  stage: [ConditionStageSchema],
  evidence: [ConditionEvidenceSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'Condition' },
  _type: { type: String, default: 'FHIR::Condition' },
});

class Condition extends mongoose.Document {
  constructor(object) {
    super(object, ConditionSchema);
    this.typeName = 'Condition';
    this._type = 'FHIR::Condition';
  }
}

module.exports.ConditionSchema = ConditionSchema;
module.exports.Condition = Condition;
