const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EffectEvidenceSynthesisCertaintySchema } = require('./EffectEvidenceSynthesisCertainty');
const { EffectEvidenceSynthesisEffectEstimateSchema } = require('./EffectEvidenceSynthesisEffectEstimate');
const { EffectEvidenceSynthesisResultsByExposureSchema } = require('./EffectEvidenceSynthesisResultsByExposure');
const { EffectEvidenceSynthesisSampleSizeSchema } = require('./EffectEvidenceSynthesisSampleSize');
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
const { UsageContextSchema } = require('./UsageContext');

const EffectEvidenceSynthesisSchema = DomainResourceSchemaFunction({
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
  exposureAlternative: ReferenceSchema,
  outcome: ReferenceSchema,
  sampleSize: EffectEvidenceSynthesisSampleSizeSchema,
  resultsByExposure: [EffectEvidenceSynthesisResultsByExposureSchema],
  effectEstimate: [EffectEvidenceSynthesisEffectEstimateSchema],
  certainty: [EffectEvidenceSynthesisCertaintySchema],
  typeName: { type: String, default: 'EffectEvidenceSynthesis' },
  _type: { type: String, default: 'FHIR::EffectEvidenceSynthesis' },
});

class EffectEvidenceSynthesis extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisSchema);
    this.typeName = 'EffectEvidenceSynthesis';
    this._type = 'FHIR::EffectEvidenceSynthesis';
  }
}

module.exports.EffectEvidenceSynthesisSchema = EffectEvidenceSynthesisSchema;
module.exports.EffectEvidenceSynthesis = EffectEvidenceSynthesis;
