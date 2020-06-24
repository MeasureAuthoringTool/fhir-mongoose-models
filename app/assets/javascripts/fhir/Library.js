const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DataRequirementSchema } = require('./DataRequirement');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ParameterDefinitionSchema } = require('./ParameterDefinition');
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

const LibrarySchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   subtitle : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   type : CodeableConceptSchema,
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
   parameter : [ParameterDefinitionSchema],
   dataRequirement : [DataRequirementSchema],
   content : [AttachmentSchema],
   fhirTitle: { type: String, default: 'Library' },
});

class Library extends mongoose.Document {
  constructor(object) {
    super(object, LibrarySchema);
    this._type = 'FHIR::Library';
  }
};


module.exports.LibrarySchema = LibrarySchema;
module.exports.Library = Library;
