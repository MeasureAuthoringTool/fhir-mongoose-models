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

const ExplanationOfBenefitDiagnosisSchema = BackboneElementSchemaFunction({
   sequence : Number,
   diagnosisCodeableConcept : CodeableConceptSchema,
   diagnosisReference : ReferenceSchema,
   type : [CodeableConceptSchema],
   onAdmission : CodeableConceptSchema,
   packageCode : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ExplanationOfBenefitDiagnosis' },
});

class ExplanationOfBenefitDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitDiagnosisSchema);
    this._type = 'FHIR::ExplanationOfBenefitDiagnosis';
  }
};


module.exports.ExplanationOfBenefitDiagnosisSchema = ExplanationOfBenefitDiagnosisSchema;
module.exports.ExplanationOfBenefitDiagnosis = ExplanationOfBenefitDiagnosis;
