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

const EpisodeOfCareDiagnosisSchema = BackboneElementSchemaFunction({
   condition : ReferenceSchema,
   role : CodeableConceptSchema,
   rank : Number,
   fhirTitle: { type: String, default: 'EpisodeOfCareDiagnosis' },
});

class EpisodeOfCareDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, EpisodeOfCareDiagnosisSchema);
    this._type = 'FHIR::EpisodeOfCareDiagnosis';
  }
};


module.exports.EpisodeOfCareDiagnosisSchema = EpisodeOfCareDiagnosisSchema;
module.exports.EpisodeOfCareDiagnosis = EpisodeOfCareDiagnosis;
