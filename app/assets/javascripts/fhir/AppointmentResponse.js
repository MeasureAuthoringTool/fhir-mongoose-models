const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ParticipantStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AppointmentResponseSchema } = require('./allSchemaHeaders.js');

AppointmentResponseSchema.add(DomainResourceSchema);
AppointmentResponseSchema.remove('id');
AppointmentResponseSchema.add({
  identifier: [IdentifierSchema],
  appointment: ReferenceSchema,
  start: PrimitiveInstantSchema,
  end: PrimitiveInstantSchema,
  participantType: [CodeableConceptSchema],
  actor: ReferenceSchema,
  participantStatus: ParticipantStatusSchema,
  comment: PrimitiveStringSchema,
});

module.exports.AppointmentResponseSchema = AppointmentResponseSchema;
