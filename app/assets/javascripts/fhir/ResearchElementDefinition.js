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
const { ResearchElementDefinitionCharacteristicSchema } = require('./ResearchElementDefinitionCharacteristic');
const { ResearchElementTypeSchema } = require('./ResearchElementType');
const { UsageContextSchema } = require('./UsageContext');
const { VariableTypeSchema } = require('./VariableType');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResearchElementDefinitionSchema = DomainResourceSchemaFunction({
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
   type : ResearchElementTypeSchema,
   variableType : VariableTypeSchema,
   characteristic : [ResearchElementDefinitionCharacteristicSchema],
   fhirTitle: { type: String, default: 'ResearchElementDefinition' },
});

class ResearchElementDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ResearchElementDefinitionSchema);
    this._type = 'FHIR::ResearchElementDefinition';
  }
};


module.exports.ResearchElementDefinitionSchema = ResearchElementDefinitionSchema;
module.exports.ResearchElementDefinition = ResearchElementDefinition;
