const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const EpisodeOfCareDiagnosisSchema = BackboneElementSchemaFunction({
  condition: ReferenceSchema,
  role: CodeableConceptSchema,
  rank: PrimitivePositiveIntSchema,
  typeName: { type: String, default: 'EpisodeOfCareDiagnosis' },
  _type: { type: String, default: 'FHIR::EpisodeOfCareDiagnosis' },
});

class EpisodeOfCareDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, EpisodeOfCareDiagnosisSchema);
    this.typeName = 'EpisodeOfCareDiagnosis';
    this._type = 'FHIR::EpisodeOfCareDiagnosis';
  }
}

module.exports.EpisodeOfCareDiagnosisSchema = EpisodeOfCareDiagnosisSchema;
module.exports.EpisodeOfCareDiagnosis = EpisodeOfCareDiagnosis;
