const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentReferenceContentSchema = BackboneElementSchemaFunction({
   attachment : AttachmentSchema,
   format : CodingSchema,
   fhirTitle: { type: String, default: 'DocumentReferenceContent' },
});

class DocumentReferenceContent extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceContentSchema);
    this._type = 'FHIR::DocumentReferenceContent';
  }
};


module.exports.DocumentReferenceContentSchema = DocumentReferenceContentSchema;
module.exports.DocumentReferenceContent = DocumentReferenceContent;
