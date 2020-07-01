const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');

const MessageDefinitionAllowedResponseSchema = BackboneElementSchemaFunction({
  message: PrimitiveCanonicalSchema,
  situation: PrimitiveMarkdownSchema,
  typeName: { type: String, default: 'MessageDefinitionAllowedResponse' },
  _type: { type: String, default: 'FHIR::MessageDefinitionAllowedResponse' },
});

class MessageDefinitionAllowedResponse extends mongoose.Document {
  constructor(object) {
    super(object, MessageDefinitionAllowedResponseSchema);
    this.typeName = 'MessageDefinitionAllowedResponse';
    this._type = 'FHIR::MessageDefinitionAllowedResponse';
  }
}

module.exports.MessageDefinitionAllowedResponseSchema = MessageDefinitionAllowedResponseSchema;
module.exports.MessageDefinitionAllowedResponse = MessageDefinitionAllowedResponse;
