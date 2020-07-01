const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const EncounterParticipantSchema = BackboneElementSchemaFunction({
  type: [CodeableConceptSchema],
  period: PeriodSchema,
  individual: ReferenceSchema,
  typeName: { type: String, default: 'EncounterParticipant' },
  _type: { type: String, default: 'FHIR::EncounterParticipant' },
});

class EncounterParticipant extends mongoose.Document {
  constructor(object) {
    super(object, EncounterParticipantSchema);
    this.typeName = 'EncounterParticipant';
    this._type = 'FHIR::EncounterParticipant';
  }
}

module.exports.EncounterParticipantSchema = EncounterParticipantSchema;
module.exports.EncounterParticipant = EncounterParticipant;
