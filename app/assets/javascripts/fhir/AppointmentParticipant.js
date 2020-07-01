const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ParticipantRequiredSchema } = require('./ParticipantRequired');
const { ParticipationStatusSchema } = require('./ParticipationStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');

const AppointmentParticipantSchema = BackboneElementSchemaFunction({
  type: [CodeableConceptSchema],
  actor: ReferenceSchema,
  required: ParticipantRequiredSchema,
  status: ParticipationStatusSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'AppointmentParticipant' },
  _type: { type: String, default: 'FHIR::AppointmentParticipant' },
});

class AppointmentParticipant extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentParticipantSchema);
    this.typeName = 'AppointmentParticipant';
    this._type = 'FHIR::AppointmentParticipant';
  }
}

module.exports.AppointmentParticipantSchema = AppointmentParticipantSchema;
module.exports.AppointmentParticipant = AppointmentParticipant;
