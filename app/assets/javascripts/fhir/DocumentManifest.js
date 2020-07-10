const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DocumentManifestRelatedSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DocumentManifestSchema } = require('./allSchemaHeaders.js');

DocumentManifestSchema.add(DomainResourceSchema);
DocumentManifestSchema.remove('id');
DocumentManifestSchema.add({
  masterIdentifier: IdentifierSchema,
  identifier: [IdentifierSchema],
  status: DocumentReferenceStatusSchema,
  type: CodeableConceptSchema,
  subject: ReferenceSchema,
  created: PrimitiveDateTimeSchema,
  author: [ReferenceSchema],
  recipient: [ReferenceSchema],
  source: PrimitiveUriSchema,
  description: PrimitiveStringSchema,
  content: [ReferenceSchema],
  related: [DocumentManifestRelatedSchema],
});

module.exports.DocumentManifestSchema = DocumentManifestSchema;
