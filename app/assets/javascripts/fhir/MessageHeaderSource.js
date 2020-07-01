const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ContactPointSchema } = require('./ContactPoint');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');

const MessageHeaderSourceSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  software: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
  contact: ContactPointSchema,
  endpoint: PrimitiveUrlSchema,
  typeName: { type: String, default: 'MessageHeaderSource' },
  _type: { type: String, default: 'FHIR::MessageHeaderSource' },
});

class MessageHeaderSource extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderSourceSchema);
    this.typeName = 'MessageHeaderSource';
    this._type = 'FHIR::MessageHeaderSource';
  }
}

module.exports.MessageHeaderSourceSchema = MessageHeaderSourceSchema;
module.exports.MessageHeaderSource = MessageHeaderSource;
