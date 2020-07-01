const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MeasureGroupSchema } = require('./MeasureGroup');
const { MeasureSupplementalDataSchema } = require('./MeasureSupplementalData');
const { PeriodSchema } = require('./Period');
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

const MeasureSchema = DomainResourceSchemaFunction({
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
  disclaimer: PrimitiveMarkdownSchema,
  scoring: CodeableConceptSchema,
  compositeScoring: CodeableConceptSchema,
  type: [CodeableConceptSchema],
  riskAdjustment: PrimitiveStringSchema,
  rateAggregation: PrimitiveStringSchema,
  rationale: PrimitiveMarkdownSchema,
  clinicalRecommendationStatement: PrimitiveMarkdownSchema,
  improvementNotation: CodeableConceptSchema,
  definition: [PrimitiveMarkdownSchema],
  guidance: PrimitiveMarkdownSchema,
  group: [MeasureGroupSchema],
  supplementalData: [MeasureSupplementalDataSchema],
  typeName: { type: String, default: 'Measure' },
  _type: { type: String, default: 'FHIR::Measure' },
});

class Measure extends mongoose.Document {
  constructor(object) {
    super(object, MeasureSchema);
    this.typeName = 'Measure';
    this._type = 'FHIR::Measure';
  }
}

module.exports.MeasureSchema = MeasureSchema;
module.exports.Measure = Measure;
