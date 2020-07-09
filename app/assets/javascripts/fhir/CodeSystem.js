const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodeSystemConceptSchema } = require('./allSchemaHeaders.js');
const { CodeSystemContentModeSchema } = require('./allSchemaHeaders.js');
const { CodeSystemFilterSchema } = require('./allSchemaHeaders.js');
const { CodeSystemHierarchyMeaningSchema } = require('./allSchemaHeaders.js');
const { CodeSystemPropertySchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { CodeSystemSchema } = require('./allSchemaHeaders.js');

CodeSystemSchema.add(DomainResourceSchema);
CodeSystemSchema.remove('id');
CodeSystemSchema.add({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
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
  caseSensitive: PrimitiveBooleanSchema,
  valueSet: PrimitiveCanonicalSchema,
  hierarchyMeaning: CodeSystemHierarchyMeaningSchema,
  compositional: PrimitiveBooleanSchema,
  versionNeeded: PrimitiveBooleanSchema,
  content: CodeSystemContentModeSchema,
  supplements: PrimitiveCanonicalSchema,
  count: PrimitiveUnsignedIntSchema,
  filter: [CodeSystemFilterSchema],
  property: [CodeSystemPropertySchema],
  concept: [CodeSystemConceptSchema],
});

module.exports.CodeSystemSchema = CodeSystemSchema;
