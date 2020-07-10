const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeSchema } = require('./allSchemaHeaders.js');
const { ValueSetExpansionSchema } = require('./allSchemaHeaders.js');
const { ValueSetSchema } = require('./allSchemaHeaders.js');

ValueSetSchema.add(DomainResourceSchema);
ValueSetSchema.remove('id');
ValueSetSchema.add({
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
  immutable: PrimitiveBooleanSchema,
  purpose: PrimitiveMarkdownSchema,
  copyright: PrimitiveMarkdownSchema,
  compose: ValueSetComposeSchema,
  expansion: ValueSetExpansionSchema,
});

module.exports.ValueSetSchema = ValueSetSchema;
