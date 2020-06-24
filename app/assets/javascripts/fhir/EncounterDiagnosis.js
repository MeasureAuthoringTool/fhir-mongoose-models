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

const EncounterDiagnosisSchema = BackboneElementSchemaFunction({
   condition : ReferenceSchema,
   use : CodeableConceptSchema,
   rank : Number,
   fhirTitle: { type: String, default: 'EncounterDiagnosis' },
});

class EncounterDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, EncounterDiagnosisSchema);
    this._type = 'FHIR::EncounterDiagnosis';
  }
};


module.exports.EncounterDiagnosisSchema = EncounterDiagnosisSchema;
module.exports.EncounterDiagnosis = EncounterDiagnosis;
