const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { ReferenceSchema } = require('./Reference');

const MessageHeaderDestinationSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  target: ReferenceSchema,
  endpoint: PrimitiveUrlSchema,
  receiver: ReferenceSchema,
  typeName: { type: String, default: 'MessageHeaderDestination' },
  _type: { type: String, default: 'FHIR::MessageHeaderDestination' },
});

class MessageHeaderDestination extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderDestinationSchema);
    this.typeName = 'MessageHeaderDestination';
    this._type = 'FHIR::MessageHeaderDestination';
  }
}

module.exports.MessageHeaderDestinationSchema = MessageHeaderDestinationSchema;
module.exports.MessageHeaderDestination = MessageHeaderDestination;
