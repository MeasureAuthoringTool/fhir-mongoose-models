const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { NamingSystemTypeSchema } = require('./NamingSystemType');
const { NamingSystemUniqueIdSchema } = require('./NamingSystemUniqueId');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const NamingSystemSchema = DomainResourceSchemaFunction({
   name : String,
   status : PublicationStatusSchema,
   kind : NamingSystemTypeSchema,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   responsible : String,
   type : CodeableConceptSchema,
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   usage : String,
   uniqueId : [NamingSystemUniqueIdSchema],
   fhirTitle: { type: String, default: 'NamingSystem' },
});

class NamingSystem extends mongoose.Document {
  constructor(object) {
    super(object, NamingSystemSchema);
    this._type = 'FHIR::NamingSystem';
  }
};


module.exports.NamingSystemSchema = NamingSystemSchema;
module.exports.NamingSystem = NamingSystem;
