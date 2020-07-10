const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MessageDefinitionAllowedResponseSchema } = require('./allSchemaHeaders.js');
const { MessageDefinitionFocusSchema } = require('./allSchemaHeaders.js');
const { MessageheaderResponseRequestSchema } = require('./allSchemaHeaders.js');
const { MessageSignificanceCategorySchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { MessageDefinitionSchema } = require('./allSchemaHeaders.js');

MessageDefinitionSchema.add(DomainResourceSchema);
MessageDefinitionSchema.remove('id');
MessageDefinitionSchema.add({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  replaces: [PrimitiveCanonicalSchema],
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
  base: PrimitiveCanonicalSchema,
  parent: [PrimitiveCanonicalSchema],
  eventCoding: CodingSchema,
  eventUri: PrimitiveUriSchema,
  category: MessageSignificanceCategorySchema,
  focus: [MessageDefinitionFocusSchema],
  responseRequired: MessageheaderResponseRequestSchema,
  allowedResponse: [MessageDefinitionAllowedResponseSchema],
  graph: [PrimitiveCanonicalSchema],
});

module.exports.MessageDefinitionSchema = MessageDefinitionSchema;
