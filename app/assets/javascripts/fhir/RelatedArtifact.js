const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactTypeSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');

RelatedArtifactSchema.add(ElementSchema);
RelatedArtifactSchema.remove('id');
RelatedArtifactSchema.add({
  type: RelatedArtifactTypeSchema,
  label: PrimitiveStringSchema,
  display: PrimitiveStringSchema,
  citation: PrimitiveMarkdownSchema,
  url: PrimitiveUrlSchema,
  document: AttachmentSchema,
  resource: PrimitiveCanonicalSchema,
});

module.exports.RelatedArtifactSchema = RelatedArtifactSchema;
