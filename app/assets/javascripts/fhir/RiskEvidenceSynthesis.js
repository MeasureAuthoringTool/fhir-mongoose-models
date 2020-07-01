const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RiskEvidenceSynthesisCertaintySchema } = require('./RiskEvidenceSynthesisCertainty');
const { RiskEvidenceSynthesisRiskEstimateSchema } = require('./RiskEvidenceSynthesisRiskEstimate');
const { RiskEvidenceSynthesisSampleSizeSchema } = require('./RiskEvidenceSynthesisSampleSize');
const { UsageContextSchema } = require('./UsageContext');

const RiskEvidenceSynthesisSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
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
  synthesisType: CodeableConceptSchema,
  studyType: CodeableConceptSchema,
  population: ReferenceSchema,
  exposure: ReferenceSchema,
  outcome: ReferenceSchema,
  sampleSize: RiskEvidenceSynthesisSampleSizeSchema,
  riskEstimate: RiskEvidenceSynthesisRiskEstimateSchema,
  certainty: [RiskEvidenceSynthesisCertaintySchema],
  typeName: { type: String, default: 'RiskEvidenceSynthesis' },
  _type: { type: String, default: 'FHIR::RiskEvidenceSynthesis' },
});

class RiskEvidenceSynthesis extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisSchema);
    this.typeName = 'RiskEvidenceSynthesis';
    this._type = 'FHIR::RiskEvidenceSynthesis';
  }
}

module.exports.RiskEvidenceSynthesisSchema = RiskEvidenceSynthesisSchema;
module.exports.RiskEvidenceSynthesis = RiskEvidenceSynthesis;
