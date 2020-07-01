const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitDiagnosisSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  diagnosisCodeableConcept: CodeableConceptSchema,
  diagnosisReference: ReferenceSchema,
  type: [CodeableConceptSchema],
  onAdmission: CodeableConceptSchema,
  packageCode: CodeableConceptSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitDiagnosis' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitDiagnosis' },
});

class ExplanationOfBenefitDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitDiagnosisSchema);
    this.typeName = 'ExplanationOfBenefitDiagnosis';
    this._type = 'FHIR::ExplanationOfBenefitDiagnosis';
  }
}

module.exports.ExplanationOfBenefitDiagnosisSchema = ExplanationOfBenefitDiagnosisSchema;
module.exports.ExplanationOfBenefitDiagnosis = ExplanationOfBenefitDiagnosis;
