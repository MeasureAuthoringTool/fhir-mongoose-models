const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');

const DocumentReferenceContentSchema = BackboneElementSchemaFunction({
  attachment: AttachmentSchema,
  format: CodingSchema,
  typeName: { type: String, default: 'DocumentReferenceContent' },
  _type: { type: String, default: 'FHIR::DocumentReferenceContent' },
});

class DocumentReferenceContent extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceContentSchema);
    this.typeName = 'DocumentReferenceContent';
    this._type = 'FHIR::DocumentReferenceContent';
  }
}

module.exports.DocumentReferenceContentSchema = DocumentReferenceContentSchema;
module.exports.DocumentReferenceContent = DocumentReferenceContent;
