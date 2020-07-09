const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ParticipantRequiredSchema } = require('./allSchemaHeaders.js');
const { ParticipationStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AppointmentParticipantSchema } = require('./allSchemaHeaders.js');

AppointmentParticipantSchema.add(BackboneElementSchema);
AppointmentParticipantSchema.remove('id');
AppointmentParticipantSchema.add({
  type: [CodeableConceptSchema],
  actor: ReferenceSchema,
  required: ParticipantRequiredSchema,
  status: ParticipationStatusSchema,
  period: PeriodSchema,
});

module.exports.AppointmentParticipantSchema = AppointmentParticipantSchema;
