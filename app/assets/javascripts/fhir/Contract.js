const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractContentDefinitionSchema } = require('./ContractContentDefinition');
const { ContractFriendlySchema } = require('./ContractFriendly');
const { ContractLegalSchema } = require('./ContractLegal');
const { ContractRuleSchema } = require('./ContractRule');
const { ContractSignerSchema } = require('./ContractSigner');
const { ContractStatusSchema } = require('./ContractStatus');
const { ContractTermSchema } = require('./ContractTerm');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   url : String,
   version : String,
   status : ContractStatusSchema,
   legalState : CodeableConceptSchema,
   instantiatesCanonical : ReferenceSchema,
   instantiatesUri : String,
   contentDerivative : CodeableConceptSchema,
   issued : DateTime,
   applies : PeriodSchema,
   expirationType : CodeableConceptSchema,
   subject : [ReferenceSchema],
   authority : [ReferenceSchema],
   domain : [ReferenceSchema],
   site : [ReferenceSchema],
   name : String,
   title : String,
   subtitle : String,
   alias : [String],
   author : ReferenceSchema,
   scope : CodeableConceptSchema,
   topicCodeableConcept : CodeableConceptSchema,
   topicReference : ReferenceSchema,
   type : CodeableConceptSchema,
   subType : [CodeableConceptSchema],
   contentDefinition : ContractContentDefinitionSchema,
   term : [ContractTermSchema],
   supportingInfo : [ReferenceSchema],
   relevantHistory : [ReferenceSchema],
   signer : [ContractSignerSchema],
   friendly : [ContractFriendlySchema],
   legal : [ContractLegalSchema],
   rule : [ContractRuleSchema],
   legallyBindingAttachment : AttachmentSchema,
   legallyBindingReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'Contract' },
});

class Contract extends mongoose.Document {
  constructor(object) {
    super(object, ContractSchema);
    this._type = 'FHIR::Contract';
  }
};


module.exports.ContractSchema = ContractSchema;
module.exports.Contract = Contract;
