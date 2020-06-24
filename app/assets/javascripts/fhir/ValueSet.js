const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { ValueSetComposeSchema } = require('./ValueSetCompose');
const { ValueSetExpansionSchema } = require('./ValueSetExpansion');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ValueSetSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : [IdentifierSchema],
   version : String,
   name : String,
   title : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   immutable : Boolean,
   purpose : String,
   copyright : String,
   compose : ValueSetComposeSchema,
   expansion : ValueSetExpansionSchema,
   fhirTitle: { type: String, default: 'ValueSet' },
});

class ValueSet extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetSchema);
    this._type = 'FHIR::ValueSet';
  }
};


module.exports.ValueSetSchema = ValueSetSchema;
module.exports.ValueSet = ValueSet;
