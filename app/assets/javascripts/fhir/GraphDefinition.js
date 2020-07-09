const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { GraphDefinitionLinkSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { GraphDefinitionSchema } = require('./allSchemaHeaders.js');

GraphDefinitionSchema.add(DomainResourceSchema);
GraphDefinitionSchema.remove('id');
GraphDefinitionSchema.add({
  url: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  start: ResourceTypeSchema,
  profile: PrimitiveCanonicalSchema,
  link: [GraphDefinitionLinkSchema],
});

module.exports.GraphDefinitionSchema = GraphDefinitionSchema;
