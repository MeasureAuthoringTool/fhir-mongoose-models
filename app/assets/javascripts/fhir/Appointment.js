const mongoose = require('mongoose/browser');
const { AppointmentParticipantSchema } = require('./AppointmentParticipant');
const { AppointmentStatusSchema } = require('./AppointmentStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');

const AppointmentSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'Appointment' },
  _type: { type: String, default: 'FHIR::Appointment' },
});

class Appointment extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentSchema);
    this.typeName = 'Appointment';
    this._type = 'FHIR::Appointment';
  }
}

module.exports.AppointmentSchema = AppointmentSchema;
module.exports.Appointment = Appointment;
