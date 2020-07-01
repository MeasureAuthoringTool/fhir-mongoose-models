const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const CareTeamParticipantSchema = BackboneElementSchemaFunction({
  role: [CodeableConceptSchema],
  member: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'CareTeamParticipant' },
  _type: { type: String, default: 'FHIR::CareTeamParticipant' },
});

class CareTeamParticipant extends mongoose.Document {
  constructor(object) {
    super(object, CareTeamParticipantSchema);
    this.typeName = 'CareTeamParticipant';
    this._type = 'FHIR::CareTeamParticipant';
  }
}

module.exports.CareTeamParticipantSchema = CareTeamParticipantSchema;
module.exports.CareTeamParticipant = CareTeamParticipant;
