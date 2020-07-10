const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceContentSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceContextSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceRelatesToSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceStatusSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ReferredDocumentStatusSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceSchema } = require('./allSchemaHeaders.js');

DocumentReferenceSchema.add(DomainResourceSchema);
DocumentReferenceSchema.remove('id');
DocumentReferenceSchema.add({
  masterIdentifier: IdentifierSchema,
  identifier: [IdentifierSchema],
  status: DocumentReferenceStatusSchema,
  docStatus: ReferredDocumentStatusSchema,
  type: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  subject: ReferenceSchema,
  date: PrimitiveInstantSchema,
  author: [ReferenceSchema],
  authenticator: ReferenceSchema,
  custodian: ReferenceSchema,
  relatesTo: [DocumentReferenceRelatesToSchema],
  description: PrimitiveStringSchema,
  securityLabel: [CodeableConceptSchema],
  content: [DocumentReferenceContentSchema],
  context: DocumentReferenceContextSchema,
});

module.exports.DocumentReferenceSchema = DocumentReferenceSchema;
