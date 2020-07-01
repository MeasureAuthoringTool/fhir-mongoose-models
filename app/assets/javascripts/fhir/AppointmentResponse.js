const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ParticipantStatusSchema } = require('./ParticipantStatus');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const AppointmentResponseSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  appointment: ReferenceSchema,
  start: PrimitiveInstantSchema,
  end: PrimitiveInstantSchema,
  participantType: [CodeableConceptSchema],
  actor: ReferenceSchema,
  participantStatus: ParticipantStatusSchema,
  comment: PrimitiveStringSchema,
  typeName: { type: String, default: 'AppointmentResponse' },
  _type: { type: String, default: 'FHIR::AppointmentResponse' },
});

class AppointmentResponse extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentResponseSchema);
    this.typeName = 'AppointmentResponse';
    this._type = 'FHIR::AppointmentResponse';
  }
}

module.exports.AppointmentResponseSchema = AppointmentResponseSchema;
module.exports.AppointmentResponse = AppointmentResponse;
