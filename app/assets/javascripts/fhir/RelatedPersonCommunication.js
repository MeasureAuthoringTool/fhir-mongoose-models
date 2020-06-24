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

const RelatedPersonCommunicationSchema = BackboneElementSchemaFunction({
   language : CodeableConceptSchema,
   preferred : Boolean,
   fhirTitle: { type: String, default: 'RelatedPersonCommunication' },
});

class RelatedPersonCommunication extends mongoose.Document {
  constructor(object) {
    super(object, RelatedPersonCommunicationSchema);
    this._type = 'FHIR::RelatedPersonCommunication';
  }
};


module.exports.RelatedPersonCommunicationSchema = RelatedPersonCommunicationSchema;
module.exports.RelatedPersonCommunication = RelatedPersonCommunication;
