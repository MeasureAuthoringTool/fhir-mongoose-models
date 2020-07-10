const { ActivityDefinitionDynamicValueSchema } = require('./allSchemaHeaders.js');
const { ActivityDefinitionKindSchema } = require('./allSchemaHeaders.js');
const { ActivityDefinitionParticipantSchema } = require('./allSchemaHeaders.js');
const { AgeSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
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
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { RequestIntentSchema } = require('./allSchemaHeaders.js');
const { RequestPrioritySchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ActivityDefinitionSchema } = require('./allSchemaHeaders.js');

ActivityDefinitionSchema.add(DomainResourceSchema);
ActivityDefinitionSchema.remove('id');
ActivityDefinitionSchema.add({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  subtitle: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  subjectCodeableConcept: CodeableConceptSchema,
  subjectReference: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
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
  kind: ActivityDefinitionKindSchema,
  profile: PrimitiveCanonicalSchema,
  code: CodeableConceptSchema,
  intent: RequestIntentSchema,
  priority: RequestPrioritySchema,
  doNotPerform: PrimitiveBooleanSchema,
  timingTiming: TimingSchema,
  timingDateTime: PrimitiveDateTimeSchema,
  timingAge: AgeSchema,
  timingPeriod: PeriodSchema,
  timingRange: RangeSchema,
  timingDuration: DurationSchema,
  location: ReferenceSchema,
  participant: [ActivityDefinitionParticipantSchema],
  productReference: ReferenceSchema,
  productCodeableConcept: CodeableConceptSchema,
  quantity: SimpleQuantitySchema,
  dosage: [DosageSchema],
  bodySite: [CodeableConceptSchema],
  specimenRequirement: [ReferenceSchema],
  observationRequirement: [ReferenceSchema],
  observationResultRequirement: [ReferenceSchema],
  transform: PrimitiveCanonicalSchema,
  dynamicValue: [ActivityDefinitionDynamicValueSchema],
});

module.exports.ActivityDefinitionSchema = ActivityDefinitionSchema;
