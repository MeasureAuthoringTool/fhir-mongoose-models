const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ParticipantStatusSchema } = require('./ParticipantStatus');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AppointmentResponseSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   appointment : ReferenceSchema,
   start : DateTime,
   end : DateTime,
   participantType : [CodeableConceptSchema],
   actor : ReferenceSchema,
   participantStatus : ParticipantStatusSchema,
   comment : String,
   fhirTitle: { type: String, default: 'AppointmentResponse' },
});

class AppointmentResponse extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentResponseSchema);
    this._type = 'FHIR::AppointmentResponse';
  }
};


module.exports.AppointmentResponseSchema = AppointmentResponseSchema;
module.exports.AppointmentResponse = AppointmentResponse;
