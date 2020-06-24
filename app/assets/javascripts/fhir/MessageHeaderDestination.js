const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageHeaderDestinationSchema = BackboneElementSchemaFunction({
   name : String,
   target : ReferenceSchema,
   endpoint : String,
   receiver : ReferenceSchema,
   fhirTitle: { type: String, default: 'MessageHeaderDestination' },
});

class MessageHeaderDestination extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderDestinationSchema);
    this._type = 'FHIR::MessageHeaderDestination';
  }
};


module.exports.MessageHeaderDestinationSchema = MessageHeaderDestinationSchema;
module.exports.MessageHeaderDestination = MessageHeaderDestination;
