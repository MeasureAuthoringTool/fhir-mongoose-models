const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CommunicationRequestPayloadSchema = BackboneElementSchemaFunction({
   contentString : String,
   contentAttachment : AttachmentSchema,
   contentReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'CommunicationRequestPayload' },
});

class CommunicationRequestPayload extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationRequestPayloadSchema);
    this._type = 'FHIR::CommunicationRequestPayload';
  }
};


module.exports.CommunicationRequestPayloadSchema = CommunicationRequestPayloadSchema;
module.exports.CommunicationRequestPayload = CommunicationRequestPayload;
