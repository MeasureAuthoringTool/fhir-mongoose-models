const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PatientCommunicationSchema = BackboneElementSchemaFunction({
   language : CodeableConceptSchema,
   preferred : Boolean,
   fhirTitle: { type: String, default: 'PatientCommunication' },
});

class PatientCommunication extends mongoose.Document {
  constructor(object) {
    super(object, PatientCommunicationSchema);
    this._type = 'FHIR::PatientCommunication';
  }
};


module.exports.PatientCommunicationSchema = PatientCommunicationSchema;
module.exports.PatientCommunication = PatientCommunication;
