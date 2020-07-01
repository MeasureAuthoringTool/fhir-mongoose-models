const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const PatientCommunicationSchema = BackboneElementSchemaFunction({
  language: CodeableConceptSchema,
  preferred: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'PatientCommunication' },
  _type: { type: String, default: 'FHIR::PatientCommunication' },
});

class PatientCommunication extends mongoose.Document {
  constructor(object) {
    super(object, PatientCommunicationSchema);
    this.typeName = 'PatientCommunication';
    this._type = 'FHIR::PatientCommunication';
  }
}

module.exports.PatientCommunicationSchema = PatientCommunicationSchema;
module.exports.PatientCommunication = PatientCommunication;
