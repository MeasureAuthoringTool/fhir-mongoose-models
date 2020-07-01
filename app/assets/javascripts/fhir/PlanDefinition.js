const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PlanDefinitionActionSchema } = require('./PlanDefinitionAction');
const { PlanDefinitionGoalSchema } = require('./PlanDefinitionGoal');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { UsageContextSchema } = require('./UsageContext');

const PlanDefinitionSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  subtitle: PrimitiveStringSchema,
  type: CodeableConceptSchema,
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
  goal: [PlanDefinitionGoalSchema],
  action: [PlanDefinitionActionSchema],
  typeName: { type: String, default: 'PlanDefinition' },
  _type: { type: String, default: 'FHIR::PlanDefinition' },
});

class PlanDefinition extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionSchema);
    this.typeName = 'PlanDefinition';
    this._type = 'FHIR::PlanDefinition';
  }
}

module.exports.PlanDefinitionSchema = PlanDefinitionSchema;
module.exports.PlanDefinition = PlanDefinition;
