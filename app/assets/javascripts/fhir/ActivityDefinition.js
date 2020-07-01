const mongoose = require('mongoose/browser');
const { ActivityDefinitionDynamicValueSchema } = require('./ActivityDefinitionDynamicValue');
const { ActivityDefinitionKindSchema } = require('./ActivityDefinitionKind');
const { ActivityDefinitionParticipantSchema } = require('./ActivityDefinitionParticipant');
const { AgeSchema } = require('./Age');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { DurationSchema } = require('./Duration');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RequestIntentSchema } = require('./RequestIntent');
const { RequestPrioritySchema } = require('./RequestPriority');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { TimingSchema } = require('./Timing');
const { UsageContextSchema } = require('./UsageContext');

const ActivityDefinitionSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'ActivityDefinition' },
  _type: { type: String, default: 'FHIR::ActivityDefinition' },
});

class ActivityDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionSchema);
    this.typeName = 'ActivityDefinition';
    this._type = 'FHIR::ActivityDefinition';
  }
}

module.exports.ActivityDefinitionSchema = ActivityDefinitionSchema;
module.exports.ActivityDefinition = ActivityDefinition;
