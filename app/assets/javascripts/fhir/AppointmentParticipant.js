const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ParticipantRequiredSchema } = require('./ParticipantRequired');
const { ParticipationStatusSchema } = require('./ParticipationStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AppointmentParticipantSchema = BackboneElementSchemaFunction({
   type : [CodeableConceptSchema],
   actor : ReferenceSchema,
   required : ParticipantRequiredSchema,
   status : ParticipationStatusSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'AppointmentParticipant' },
});

class AppointmentParticipant extends mongoose.Document {
  constructor(object) {
    super(object, AppointmentParticipantSchema);
    this._type = 'FHIR::AppointmentParticipant';
  }
};


module.exports.AppointmentParticipantSchema = AppointmentParticipantSchema;
module.exports.AppointmentParticipant = AppointmentParticipant;
