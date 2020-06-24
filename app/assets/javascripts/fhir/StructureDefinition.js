const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRVersionSchema } = require('./FHIRVersion');
const { IdentifierSchema } = require('./Identifier');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { StructureDefinitionContextSchema } = require('./StructureDefinitionContext');
const { StructureDefinitionDifferentialSchema } = require('./StructureDefinitionDifferential');
const { StructureDefinitionKindSchema } = require('./StructureDefinitionKind');
const { StructureDefinitionMappingSchema } = require('./StructureDefinitionMapping');
const { StructureDefinitionSnapshotSchema } = require('./StructureDefinitionSnapshot');
const { TypeDerivationRuleSchema } = require('./TypeDerivationRule');
const { UsageContextSchema } = require('./UsageContext');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureDefinitionSchema = DomainResourceSchemaFunction({
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
   keyword : [CodingSchema],
   fhirVersion : FHIRVersionSchema,
   mapping : [StructureDefinitionMappingSchema],
   kind : StructureDefinitionKindSchema,
   abstract : Boolean,
   context : [StructureDefinitionContextSchema],
   contextInvariant : [String],
   type : String,
   baseDefinition : String,
   derivation : TypeDerivationRuleSchema,
   snapshot : StructureDefinitionSnapshotSchema,
   differential : StructureDefinitionDifferentialSchema,
   fhirTitle: { type: String, default: 'StructureDefinition' },
});

class StructureDefinition extends mongoose.Document {
  constructor(object) {
    super(object, StructureDefinitionSchema);
    this._type = 'FHIR::StructureDefinition';
  }
};


module.exports.StructureDefinitionSchema = StructureDefinitionSchema;
module.exports.StructureDefinition = StructureDefinition;
