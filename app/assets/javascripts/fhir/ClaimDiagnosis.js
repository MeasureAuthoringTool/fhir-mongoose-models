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

const ClaimDiagnosisSchema = BackboneElementSchemaFunction({
   sequence : Number,
   diagnosisCodeableConcept : CodeableConceptSchema,
   diagnosisReference : ReferenceSchema,
   type : [CodeableConceptSchema],
   onAdmission : CodeableConceptSchema,
   packageCode : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ClaimDiagnosis' },
});

class ClaimDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, ClaimDiagnosisSchema);
    this._type = 'FHIR::ClaimDiagnosis';
  }
};


module.exports.ClaimDiagnosisSchema = ClaimDiagnosisSchema;
module.exports.ClaimDiagnosis = ClaimDiagnosis;
