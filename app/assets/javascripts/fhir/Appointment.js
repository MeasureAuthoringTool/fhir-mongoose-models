const { AppointmentParticipantSchema } = require('./allSchemaHeaders.js');
const { AppointmentStatusSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AppointmentSchema } = require('./allSchemaHeaders.js');

AppointmentSchema.add(DomainResourceSchema);
AppointmentSchema.remove('id');
AppointmentSchema.add({
  identifier: [IdentifierSchema],
  status: AppointmentStatusSchema,
  cancelationReason: CodeableConceptSchema,
  serviceCategory: [CodeableConceptSchema],
  serviceType: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  appointmentType: CodeableConceptSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  priority: PrimitiveUnsignedIntSchema,
  description: PrimitiveStringSchema,
  supportingInformation: [ReferenceSchema],
  start: PrimitiveInstantSchema,
  end: PrimitiveInstantSchema,
  minutesDuration: PrimitivePositiveIntSchema,
  slot: [ReferenceSchema],
  created: PrimitiveDateTimeSchema,
  comment: PrimitiveStringSchema,
  patientInstruction: PrimitiveStringSchema,
  basedOn: [ReferenceSchema],
  participant: [AppointmentParticipantSchema],
  requestedPeriod: [PeriodSchema],
});

module.exports.AppointmentSchema = AppointmentSchema;
