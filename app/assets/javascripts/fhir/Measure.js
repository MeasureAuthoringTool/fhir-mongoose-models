const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MeasureGroupSchema } = require('./MeasureGroup');
const { MeasureSupplementalDataSchema } = require('./MeasureSupplementalData');
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

const MeasureSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   subtitle : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   subjectCodeableConcept : CodeableConceptSchema,
   subjectReference : ReferenceSchema,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   usage : String,
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
   library : [String],
   disclaimer : String,
   scoring : CodeableConceptSchema,
   compositeScoring : CodeableConceptSchema,
   type : [CodeableConceptSchema],
   riskAdjustment : String,
   rateAggregation : String,
   rationale : String,
   clinicalRecommendationStatement : String,
   improvementNotation : CodeableConceptSchema,
   definition : [String],
   guidance : String,
   group : [MeasureGroupSchema],
   supplementalData : [MeasureSupplementalDataSchema],
   fhirTitle: { type: String, default: 'Measure' },
});

class Measure extends mongoose.Document {
  constructor(object) {
    super(object, MeasureSchema);
    this._type = 'FHIR::Measure';
  }
};


module.exports.MeasureSchema = MeasureSchema;
module.exports.Measure = Measure;
