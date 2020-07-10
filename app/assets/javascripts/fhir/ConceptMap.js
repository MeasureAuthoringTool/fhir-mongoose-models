const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ConceptMapSchema } = require('./allSchemaHeaders.js');

ConceptMapSchema.add(DomainResourceSchema);
ConceptMapSchema.remove('id');
ConceptMapSchema.add({
  url: PrimitiveUriSchema,
  identifier: IdentifierSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  copyright: PrimitiveMarkdownSchema,
  sourceUri: PrimitiveUriSchema,
  sourceCanonical: PrimitiveCanonicalSchema,
  targetUri: PrimitiveUriSchema,
  targetCanonical: PrimitiveCanonicalSchema,
  group: [ConceptMapGroupSchema],
});

module.exports.ConceptMapSchema = ConceptMapSchema;
