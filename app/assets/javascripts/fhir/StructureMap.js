const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { StructureMapGroupSchema } = require('./StructureMapGroup');
const { StructureMapStructureSchema } = require('./StructureMapStructure');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapSchema = DomainResourceSchemaFunction({
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
   structure : [StructureMapStructureSchema],
   import : [String],
   group : [StructureMapGroupSchema],
   fhirTitle: { type: String, default: 'StructureMap' },
});

class StructureMap extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapSchema);
    this._type = 'FHIR::StructureMap';
  }
};


module.exports.StructureMapSchema = StructureMapSchema;
module.exports.StructureMap = StructureMap;
