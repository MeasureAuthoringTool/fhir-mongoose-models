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
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ResearchDefinitionSchema } = require('./allSchemaHeaders.js');

ResearchDefinitionSchema.add(DomainResourceSchema);
ResearchDefinitionSchema.remove('id');
ResearchDefinitionSchema.add({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  shortTitle: PrimitiveStringSchema,
  subtitle: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  subjectCodeableConcept: CodeableConceptSchema,
  subjectReference: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  comment: [PrimitiveStringSchema],
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  usage: PrimitiveStringSchema,
  copyright: PrimitiveMarkdownSchema,
  approvalDate: PrimitiveDateSchema,
  lastReviewDate: PrimitiveDateSchema,
  effectivePeriod: PeriodSchema,
  topic: [CodeableConceptSchema],
  author: [ContactDetailSchema],
  editor: [ContactDetailSchema],
  reviewer: [ContactDetailSchema],
  endorser: [ContactDetailSchema],
  relatedArtifact: [RelatedArtifactSchema],
  library: [PrimitiveCanonicalSchema],
  population: ReferenceSchema,
  exposure: ReferenceSchema,
  exposureAlternative: ReferenceSchema,
  outcome: ReferenceSchema,
});

module.exports.ResearchDefinitionSchema = ResearchDefinitionSchema;
