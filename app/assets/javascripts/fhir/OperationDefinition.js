const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { OperationDefinitionOverloadSchema } = require('./OperationDefinitionOverload');
const { OperationDefinitionParameterSchema } = require('./OperationDefinitionParameter');
const { OperationKindSchema } = require('./OperationKind');
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

const OperationDefinitionSchema = DomainResourceSchemaFunction({
   url : String,
   version : String,
   name : String,
   title : String,
   status : PublicationStatusSchema,
   kind : OperationKindSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   affectsState : Boolean,
   code : String,
   comment : String,
   base : String,
   resource : [ResourceTypeSchema],
   system : Boolean,
   type : Boolean,
   instance : Boolean,
   inputProfile : String,
   outputProfile : String,
   parameter : [OperationDefinitionParameterSchema],
   overload : [OperationDefinitionOverloadSchema],
   fhirTitle: { type: String, default: 'OperationDefinition' },
});

class OperationDefinition extends mongoose.Document {
  constructor(object) {
    super(object, OperationDefinitionSchema);
    this._type = 'FHIR::OperationDefinition';
  }
};


module.exports.OperationDefinitionSchema = OperationDefinitionSchema;
module.exports.OperationDefinition = OperationDefinition;
