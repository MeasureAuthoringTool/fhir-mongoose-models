const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const CoverageEligibilityRequestItemDiagnosisSchema = BackboneElementSchemaFunction({
  diagnosisCodeableConcept: CodeableConceptSchema,
  diagnosisReference: ReferenceSchema,
  typeName: { type: String, default: 'CoverageEligibilityRequestItemDiagnosis' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityRequestItemDiagnosis' },
});

class CoverageEligibilityRequestItemDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestItemDiagnosisSchema);
    this.typeName = 'CoverageEligibilityRequestItemDiagnosis';
    this._type = 'FHIR::CoverageEligibilityRequestItemDiagnosis';
  }
}

module.exports.CoverageEligibilityRequestItemDiagnosisSchema = CoverageEligibilityRequestItemDiagnosisSchema;
module.exports.CoverageEligibilityRequestItemDiagnosis = CoverageEligibilityRequestItemDiagnosis;
