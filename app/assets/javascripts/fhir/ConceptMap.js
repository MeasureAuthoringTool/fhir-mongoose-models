const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ConceptMapGroupSchema } = require('./ConceptMapGroup');
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

const ConceptMapSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : IdentifierSchema,
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
   sourceUri : String,
   sourceCanonical : String,
   targetUri : String,
   targetCanonical : String,
   group : [ConceptMapGroupSchema],
   fhirTitle: { type: String, default: 'ConceptMap' },
});

class ConceptMap extends mongoose.Document {
  constructor(object) {
    super(object, ConceptMapSchema);
    this._type = 'FHIR::ConceptMap';
  }
};


module.exports.ConceptMapSchema = ConceptMapSchema;
module.exports.ConceptMap = ConceptMap;
