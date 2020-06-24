const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractPublicationStatusSchema } = require('./ContractPublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractContentDefinitionSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   subType : CodeableConceptSchema,
   publisher : ReferenceSchema,
   publicationDate : DateTime,
   publicationStatus : ContractPublicationStatusSchema,
   copyright : String,
   fhirTitle: { type: String, default: 'ContractContentDefinition' },
});

class ContractContentDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ContractContentDefinitionSchema);
    this._type = 'FHIR::ContractContentDefinition';
  }
};


module.exports.ContractContentDefinitionSchema = ContractContentDefinitionSchema;
module.exports.ContractContentDefinition = ContractContentDefinition;
