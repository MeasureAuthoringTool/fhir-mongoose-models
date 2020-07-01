const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const CommunicationRequestPayloadSchema = BackboneElementSchemaFunction({
  contentString: PrimitiveStringSchema,
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
  typeName: { type: String, default: 'CommunicationRequestPayload' },
  _type: { type: String, default: 'FHIR::CommunicationRequestPayload' },
});

class CommunicationRequestPayload extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationRequestPayloadSchema);
    this.typeName = 'CommunicationRequestPayload';
    this._type = 'FHIR::CommunicationRequestPayload';
  }
}

module.exports.CommunicationRequestPayloadSchema = CommunicationRequestPayloadSchema;
module.exports.CommunicationRequestPayload = CommunicationRequestPayload;
