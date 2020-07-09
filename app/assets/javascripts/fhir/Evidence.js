const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { EvidenceSchema } = require('./allSchemaHeaders.js');

EvidenceSchema.add(DomainResourceSchema);
EvidenceSchema.remove('id');
EvidenceSchema.add({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  shortTitle: PrimitiveStringSchema,
  subtitle: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  note: [AnnotationSchema],
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
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
  exposureBackground: ReferenceSchema,
  exposureVariant: [ReferenceSchema],
  outcome: [ReferenceSchema],
});

module.exports.EvidenceSchema = EvidenceSchema;
