const { ChargeItemDefinitionApplicabilitySchema } = require('./allSchemaHeaders.js');
const { ChargeItemDefinitionPropertyGroupSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ChargeItemDefinitionSchema } = require('./allSchemaHeaders.js');

ChargeItemDefinitionSchema.add(DomainResourceSchema);
ChargeItemDefinitionSchema.remove('id');
ChargeItemDefinitionSchema.add({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  derivedFromUri: [PrimitiveUriSchema],
  partOf: [PrimitiveCanonicalSchema],
  replaces: [PrimitiveCanonicalSchema],
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  copyright: PrimitiveMarkdownSchema,
  approvalDate: PrimitiveDateSchema,
  lastReviewDate: PrimitiveDateSchema,
  effectivePeriod: PeriodSchema,
  code: CodeableConceptSchema,
  instance: [ReferenceSchema],
  applicability: [ChargeItemDefinitionApplicabilitySchema],
  propertyGroup: [ChargeItemDefinitionPropertyGroupSchema],
});

module.exports.ChargeItemDefinitionSchema = ChargeItemDefinitionSchema;
