const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const ClaimDiagnosisSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  diagnosisCodeableConcept: CodeableConceptSchema,
  diagnosisReference: ReferenceSchema,
  type: [CodeableConceptSchema],
  onAdmission: CodeableConceptSchema,
  packageCode: CodeableConceptSchema,
  typeName: { type: String, default: 'ClaimDiagnosis' },
  _type: { type: String, default: 'FHIR::ClaimDiagnosis' },
});

class ClaimDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, ClaimDiagnosisSchema);
    this.typeName = 'ClaimDiagnosis';
    this._type = 'FHIR::ClaimDiagnosis';
  }
}

module.exports.ClaimDiagnosisSchema = ClaimDiagnosisSchema;
module.exports.ClaimDiagnosis = ClaimDiagnosis;
