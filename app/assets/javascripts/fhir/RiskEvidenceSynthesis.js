const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { RiskEvidenceSynthesisCertaintySchema } = require('./RiskEvidenceSynthesisCertainty');
const { RiskEvidenceSynthesisRiskEstimateSchema } = require('./RiskEvidenceSynthesisRiskEstimate');
const { RiskEvidenceSynthesisSampleSizeSchema } = require('./RiskEvidenceSynthesisSampleSize');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskEvidenceSynthesisSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   status : PublicationStatusSchema,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   note : [AnnotationSchema],
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   copyright : String,
   approvalDate : FHIRDate,
   lastReviewDate : FHIRDate,
   effectivePeriod : PeriodSchema,
   topic : [CodeableConceptSchema],
   author : [ContactDetailSchema],
   editor : [ContactDetailSchema],
   reviewer : [ContactDetailSchema],
   endorser : [ContactDetailSchema],
   relatedArtifact : [RelatedArtifactSchema],
   synthesisType : CodeableConceptSchema,
   studyType : CodeableConceptSchema,
   population : ReferenceSchema,
   exposure : ReferenceSchema,
   outcome : ReferenceSchema,
   sampleSize : RiskEvidenceSynthesisSampleSizeSchema,
   riskEstimate : RiskEvidenceSynthesisRiskEstimateSchema,
   certainty : [RiskEvidenceSynthesisCertaintySchema],
   fhirTitle: { type: String, default: 'RiskEvidenceSynthesis' },
});

class RiskEvidenceSynthesis extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisSchema);
    this._type = 'FHIR::RiskEvidenceSynthesis';
  }
};


module.exports.RiskEvidenceSynthesisSchema = RiskEvidenceSynthesisSchema;
module.exports.RiskEvidenceSynthesis = RiskEvidenceSynthesis;
