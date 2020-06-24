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

const CommunicationPayloadSchema = BackboneElementSchemaFunction({
   contentString : String,
   contentAttachment : AttachmentSchema,
   contentReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'CommunicationPayload' },
});

class CommunicationPayload extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationPayloadSchema);
    this._type = 'FHIR::CommunicationPayload';
  }
};


module.exports.CommunicationPayloadSchema = CommunicationPayloadSchema;
module.exports.CommunicationPayload = CommunicationPayload;
