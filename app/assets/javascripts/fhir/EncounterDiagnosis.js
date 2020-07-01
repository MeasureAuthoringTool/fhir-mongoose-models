const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const EncounterDiagnosisSchema = BackboneElementSchemaFunction({
  condition: ReferenceSchema,
  use: CodeableConceptSchema,
  rank: PrimitivePositiveIntSchema,
  typeName: { type: String, default: 'EncounterDiagnosis' },
  _type: { type: String, default: 'FHIR::EncounterDiagnosis' },
});

class EncounterDiagnosis extends mongoose.Document {
  constructor(object) {
    super(object, EncounterDiagnosisSchema);
    this.typeName = 'EncounterDiagnosis';
    this._type = 'FHIR::EncounterDiagnosis';
  }
}

module.exports.EncounterDiagnosisSchema = EncounterDiagnosisSchema;
module.exports.EncounterDiagnosis = EncounterDiagnosis;
