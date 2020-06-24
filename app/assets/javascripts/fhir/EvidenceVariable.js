const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { EvidenceVariableCharacteristicSchema } = require('./EvidenceVariableCharacteristic');
const { EvidenceVariableTypeSchema } = require('./EvidenceVariableType');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EvidenceVariableSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   shortTitle : String,
   subtitle : String,
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
   type : EvidenceVariableTypeSchema,
   characteristic : [EvidenceVariableCharacteristicSchema],
   fhirTitle: { type: String, default: 'EvidenceVariable' },
});

class EvidenceVariable extends mongoose.Document {
  constructor(object) {
    super(object, EvidenceVariableSchema);
    this._type = 'FHIR::EvidenceVariable';
  }
};


module.exports.EvidenceVariableSchema = EvidenceVariableSchema;
module.exports.EvidenceVariable = EvidenceVariable;
