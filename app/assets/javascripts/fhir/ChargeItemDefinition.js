const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { ChargeItemDefinitionApplicabilitySchema } = require('./ChargeItemDefinitionApplicability');
const { ChargeItemDefinitionPropertyGroupSchema } = require('./ChargeItemDefinitionPropertyGroup');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ChargeItemDefinitionSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   title : String,
   derivedFromUri : [String],
   partOf : [String],
   replaces : [String],
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   copyright : String,
   approvalDate : FHIRDate,
   lastReviewDate : FHIRDate,
   effectivePeriod : PeriodSchema,
   code : CodeableConceptSchema,
   instance : [ReferenceSchema],
   applicability : [ChargeItemDefinitionApplicabilitySchema],
   propertyGroup : [ChargeItemDefinitionPropertyGroupSchema],
   fhirTitle: { type: String, default: 'ChargeItemDefinition' },
});

class ChargeItemDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionSchema);
    this._type = 'FHIR::ChargeItemDefinition';
  }
};


module.exports.ChargeItemDefinitionSchema = ChargeItemDefinitionSchema;
module.exports.ChargeItemDefinition = ChargeItemDefinition;
