const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { QuestionnaireItemSchema } = require('./QuestionnaireItem');
const { ResourceTypeSchema } = require('./ResourceType');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QuestionnaireSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   derivedFrom : [String],
   status : PublicationStatusSchema,
   experimental : Boolean,
   subjectType : [ResourceTypeSchema],
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   copyright : String,
   approvalDate : FHIRDate,
   lastReviewDate : FHIRDate,
   effectivePeriod : PeriodSchema,
   code : [CodingSchema],
   item : [QuestionnaireItemSchema],
   fhirTitle: { type: String, default: 'Questionnaire' },
});

class Questionnaire extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireSchema);
    this._type = 'FHIR::Questionnaire';
  }
};


module.exports.QuestionnaireSchema = QuestionnaireSchema;
module.exports.Questionnaire = Questionnaire;
