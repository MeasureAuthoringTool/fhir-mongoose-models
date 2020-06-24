const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityRequestItemDiagnosisSchema = BackboneElementSchemaFunction({
   diagnosisCodeableConcept : CodeableConceptSchema,
   diagnosisReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'CoverageEligibilityRequestItemDiagnosis' },
});

class CoverageEligibilityRequestItemDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestItemDiagnosisSchema);
    this._type = 'FHIR::CoverageEligibilityRequestItemDiagnosis';
  }
};


module.exports.CoverageEligibilityRequestItemDiagnosisSchema = CoverageEligibilityRequestItemDiagnosisSchema;
module.exports.CoverageEligibilityRequestItemDiagnosis = CoverageEligibilityRequestItemDiagnosis;
