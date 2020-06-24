const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
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

const ResearchDefinitionSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   shortTitle : String,
   subtitle : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   subjectCodeableConcept : CodeableConceptSchema,
   subjectReference : ReferenceSchema,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   comment : [String],
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
   population : ReferenceSchema,
   exposure : ReferenceSchema,
   exposureAlternative : ReferenceSchema,
   outcome : ReferenceSchema,
   fhirTitle: { type: String, default: 'ResearchDefinition' },
});

class ResearchDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ResearchDefinitionSchema);
    this._type = 'FHIR::ResearchDefinition';
  }
};


module.exports.ResearchDefinitionSchema = ResearchDefinitionSchema;
module.exports.ResearchDefinition = ResearchDefinition;
