const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');

const RelatedPersonCommunicationSchema = BackboneElementSchemaFunction({
  language: CodeableConceptSchema,
  preferred: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'RelatedPersonCommunication' },
  _type: { type: String, default: 'FHIR::RelatedPersonCommunication' },
});

class RelatedPersonCommunication extends mongoose.Document {
  constructor(object) {
    super(object, RelatedPersonCommunicationSchema);
    this.typeName = 'RelatedPersonCommunication';
    this._type = 'FHIR::RelatedPersonCommunication';
  }
}

module.exports.RelatedPersonCommunicationSchema = RelatedPersonCommunicationSchema;
module.exports.RelatedPersonCommunication = RelatedPersonCommunication;
