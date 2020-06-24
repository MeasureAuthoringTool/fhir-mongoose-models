const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeSystemConceptSchema } = require('./CodeSystemConcept');
const { CodeSystemContentModeSchema } = require('./CodeSystemContentMode');
const { CodeSystemFilterSchema } = require('./CodeSystemFilter');
const { CodeSystemHierarchyMeaningSchema } = require('./CodeSystemHierarchyMeaning');
const { CodeSystemPropertySchema } = require('./CodeSystemProperty');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CodeSystemSchema = DomainResourceSchemaFunction({
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
   purpose : String,
   copyright : String,
   caseSensitive : Boolean,
   valueSet : String,
   hierarchyMeaning : CodeSystemHierarchyMeaningSchema,
   compositional : Boolean,
   versionNeeded : Boolean,
   content : CodeSystemContentModeSchema,
   supplements : String,
   count : Number,
   filter : [CodeSystemFilterSchema],
   property : [CodeSystemPropertySchema],
   concept : [CodeSystemConceptSchema],
   fhirTitle: { type: String, default: 'CodeSystem' },
});

class CodeSystem extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemSchema);
    this._type = 'FHIR::CodeSystem';
  }
};


module.exports.CodeSystemSchema = CodeSystemSchema;
module.exports.CodeSystem = CodeSystem;
