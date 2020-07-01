const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImmunizationEvaluationStatusSchema } = require('./ImmunizationEvaluationStatus');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ImmunizationEvaluationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: ImmunizationEvaluationStatusSchema,
  patient: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  authority: ReferenceSchema,
  targetDisease: CodeableConceptSchema,
  immunizationEvent: ReferenceSchema,
  doseStatus: CodeableConceptSchema,
  doseStatusReason: [CodeableConceptSchema],
  description: PrimitiveStringSchema,
  series: PrimitiveStringSchema,
  doseNumberPositiveInt: PrimitivePositiveIntSchema,
  doseNumberString: PrimitiveStringSchema,
  seriesDosesPositiveInt: PrimitivePositiveIntSchema,
  seriesDosesString: PrimitiveStringSchema,
  typeName: { type: String, default: 'ImmunizationEvaluation' },
  _type: { type: String, default: 'FHIR::ImmunizationEvaluation' },
});

class ImmunizationEvaluation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationEvaluationSchema);
    this.typeName = 'ImmunizationEvaluation';
    this._type = 'FHIR::ImmunizationEvaluation';
  }
}

module.exports.ImmunizationEvaluationSchema = ImmunizationEvaluationSchema;
module.exports.ImmunizationEvaluation = ImmunizationEvaluation;
