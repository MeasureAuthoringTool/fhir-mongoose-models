const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');

const AttachmentSchema = ElementSchemaFunction({
  contentType: MimeTypeSchema,
  language: PrimitiveCodeSchema,
  data: PrimitiveBase64BinarySchema,
  url: PrimitiveUrlSchema,
  size: PrimitiveUnsignedIntSchema,
  hash: PrimitiveBase64BinarySchema,
  title: PrimitiveStringSchema,
  creation: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'Attachment' },
  _type: { type: String, default: 'FHIR::Attachment' },
});

class Attachment extends mongoose.Document {
  constructor(object) {
    super(object, AttachmentSchema);
    this.typeName = 'Attachment';
    this._type = 'FHIR::Attachment';
  }
}

module.exports.AttachmentSchema = AttachmentSchema;
module.exports.Attachment = Attachment;
