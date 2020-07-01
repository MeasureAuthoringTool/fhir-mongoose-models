const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { RiskAssessmentPredictionSchema } = require('./RiskAssessmentPrediction');
const { RiskAssessmentStatusSchema } = require('./RiskAssessmentStatus');

const RiskAssessmentSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  basedOn: ReferenceSchema,
  parent: ReferenceSchema,
  status: RiskAssessmentStatusSchema,
  method: CodeableConceptSchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  condition: ReferenceSchema,
  performer: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  basis: [ReferenceSchema],
  prediction: [RiskAssessmentPredictionSchema],
  mitigation: PrimitiveStringSchema,
  note: [AnnotationSchema],
  typeName: { type: String, default: 'RiskAssessment' },
  _type: { type: String, default: 'FHIR::RiskAssessment' },
});

class RiskAssessment extends mongoose.Document {
  constructor(object) {
    super(object, RiskAssessmentSchema);
    this.typeName = 'RiskAssessment';
    this._type = 'FHIR::RiskAssessment';
  }
}

module.exports.RiskAssessmentSchema = RiskAssessmentSchema;
module.exports.RiskAssessment = RiskAssessment;
