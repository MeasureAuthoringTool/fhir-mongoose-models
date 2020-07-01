const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { RelatedArtifactTypeSchema } = require('./RelatedArtifactType');

const RelatedArtifactSchema = ElementSchemaFunction({
  type: RelatedArtifactTypeSchema,
  label: PrimitiveStringSchema,
  display: PrimitiveStringSchema,
  citation: PrimitiveMarkdownSchema,
  url: PrimitiveUrlSchema,
  document: AttachmentSchema,
  resource: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'RelatedArtifact' },
  _type: { type: String, default: 'FHIR::RelatedArtifact' },
});

class RelatedArtifact extends mongoose.Document {
  constructor(object) {
    super(object, RelatedArtifactSchema);
    this.typeName = 'RelatedArtifact';
    this._type = 'FHIR::RelatedArtifact';
  }
}

module.exports.RelatedArtifactSchema = RelatedArtifactSchema;
module.exports.RelatedArtifact = RelatedArtifact;
