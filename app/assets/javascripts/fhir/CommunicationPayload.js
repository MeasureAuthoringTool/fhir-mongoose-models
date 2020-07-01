const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const CommunicationPayloadSchema = BackboneElementSchemaFunction({
  contentString: PrimitiveStringSchema,
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
  typeName: { type: String, default: 'CommunicationPayload' },
  _type: { type: String, default: 'FHIR::CommunicationPayload' },
});

class CommunicationPayload extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationPayloadSchema);
    this.typeName = 'CommunicationPayload';
    this._type = 'FHIR::CommunicationPayload';
  }
}

module.exports.CommunicationPayloadSchema = CommunicationPayloadSchema;
module.exports.CommunicationPayload = CommunicationPayload;
