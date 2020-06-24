const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AppointmentParticipantSchema } = require('./AppointmentParticipant');
const { AppointmentStatusSchema } = require('./AppointmentStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AppointmentSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : AppointmentStatusSchema,
   cancelationReason : CodeableConceptSchema,
   serviceCategory : [CodeableConceptSchema],
   serviceType : [CodeableConceptSchema],
   specialty : [CodeableConceptSchema],
   appointmentType : CodeableConceptSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   priority : Number,
   description : String,
   supportingInformation : [ReferenceSchema],
   start : DateTime,
   end : DateTime,
   minutesDuration : Number,
   slot : [ReferenceSchema],
   created : DateTime,
   comment : String,
   patientInstruction : String,
   basedOn : [ReferenceSchema],
   participant : [AppointmentParticipantSchema],
   requestedPeriod : [PeriodSchema],
   fhirTitle: { type: String, default: 'Appointment' },
});

class Appointment extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentSchema);
    this._type = 'FHIR::Appointment';
  }
};


module.exports.AppointmentSchema = AppointmentSchema;
module.exports.Appointment = Appointment;
