const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { GraphDefinitionLinkSchema } = require('./GraphDefinitionLink');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ResourceTypeSchema } = require('./ResourceType');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GraphDefinitionSchema = DomainResourceSchemaFunction({
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
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   start : ResourceTypeSchema,
   profile : String,
   link : [GraphDefinitionLinkSchema],
   fhirTitle: { type: String, default: 'GraphDefinition' },
});

class GraphDefinition extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionSchema);
    this._type = 'FHIR::GraphDefinition';
  }
};


module.exports.GraphDefinitionSchema = GraphDefinitionSchema;
module.exports.GraphDefinition = GraphDefinition;
