const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CompartmentDefinitionResourceSchema } = require('./CompartmentDefinitionResource');
const { CompartmentTypeSchema } = require('./CompartmentType');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompartmentDefinitionSchema = DomainResourceSchemaFunction({
   url : String,
   version : String,
   name : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   purpose : String,
   code : CompartmentTypeSchema,
   search : Boolean,
   resource : [CompartmentDefinitionResourceSchema],
   fhirTitle: { type: String, default: 'CompartmentDefinition' },
});

class CompartmentDefinition extends mongoose.Document {
  constructor(object) {
    super(object, CompartmentDefinitionSchema);
    this._type = 'FHIR::CompartmentDefinition';
  }
};


module.exports.CompartmentDefinitionSchema = CompartmentDefinitionSchema;
module.exports.CompartmentDefinition = CompartmentDefinition;
