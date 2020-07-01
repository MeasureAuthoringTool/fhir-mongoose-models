const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { ReferenceSchema } = require('./Reference');
const { ResponseTypeSchema } = require('./ResponseType');

const MessageHeaderResponseSchema = BackboneElementSchemaFunction({
  identifier: PrimitiveIdSchema,
  code: ResponseTypeSchema,
  details: ReferenceSchema,
  typeName: { type: String, default: 'MessageHeaderResponse' },
  _type: { type: String, default: 'FHIR::MessageHeaderResponse' },
});

class MessageHeaderResponse extends mongoose.Document {
  constructor(object) {
    super(object, MessageHeaderResponseSchema);
    this.typeName = 'MessageHeaderResponse';
    this._type = 'FHIR::MessageHeaderResponse';
  }
}

module.exports.MessageHeaderResponseSchema = MessageHeaderResponseSchema;
module.exports.MessageHeaderResponse = MessageHeaderResponse;
