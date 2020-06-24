const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { EffectEvidenceSynthesisCertaintySchema } = require('./EffectEvidenceSynthesisCertainty');
const { EffectEvidenceSynthesisEffectEstimateSchema } = require('./EffectEvidenceSynthesisEffectEstimate');
const { EffectEvidenceSynthesisResultsByExposureSchema } = require('./EffectEvidenceSynthesisResultsByExposure');
const { EffectEvidenceSynthesisSampleSizeSchema } = require('./EffectEvidenceSynthesisSampleSize');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EffectEvidenceSynthesisSchema = DomainResourceSchemaFunction({
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
   exposureAlternative : ReferenceSchema,
   outcome : ReferenceSchema,
   sampleSize : EffectEvidenceSynthesisSampleSizeSchema,
   resultsByExposure : [EffectEvidenceSynthesisResultsByExposureSchema],
   effectEstimate : [EffectEvidenceSynthesisEffectEstimateSchema],
   certainty : [EffectEvidenceSynthesisCertaintySchema],
   fhirTitle: { type: String, default: 'EffectEvidenceSynthesis' },
});

class EffectEvidenceSynthesis extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisSchema);
    this._type = 'FHIR::EffectEvidenceSynthesis';
  }
};


module.exports.EffectEvidenceSynthesisSchema = EffectEvidenceSynthesisSchema;
module.exports.EffectEvidenceSynthesis = EffectEvidenceSynthesis;
