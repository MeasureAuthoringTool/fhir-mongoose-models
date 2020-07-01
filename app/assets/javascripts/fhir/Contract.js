const mongoose = require('mongoose/browser');
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
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const ContractSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  url: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  status: ContractStatusSchema,
  legalState: CodeableConceptSchema,
  instantiatesCanonical: ReferenceSchema,
  instantiatesUri: PrimitiveUriSchema,
  contentDerivative: CodeableConceptSchema,
  issued: PrimitiveDateTimeSchema,
  applies: PeriodSchema,
  expirationType: CodeableConceptSchema,
  subject: [ReferenceSchema],
  authority: [ReferenceSchema],
  domain: [ReferenceSchema],
  site: [ReferenceSchema],
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  subtitle: PrimitiveStringSchema,
  alias: [PrimitiveStringSchema],
  author: ReferenceSchema,
  scope: CodeableConceptSchema,
  topicCodeableConcept: CodeableConceptSchema,
  topicReference: ReferenceSchema,
  type: CodeableConceptSchema,
  subType: [CodeableConceptSchema],
  contentDefinition: ContractContentDefinitionSchema,
  term: [ContractTermSchema],
  supportingInfo: [ReferenceSchema],
  relevantHistory: [ReferenceSchema],
  signer: [ContractSignerSchema],
  friendly: [ContractFriendlySchema],
  legal: [ContractLegalSchema],
  rule: [ContractRuleSchema],
  legallyBindingAttachment: AttachmentSchema,
  legallyBindingReference: ReferenceSchema,
  typeName: { type: String, default: 'Contract' },
  _type: { type: String, default: 'FHIR::Contract' },
});

class Contract extends mongoose.Document {
  constructor(object) {
    super(object, ContractSchema);
    this.typeName = 'Contract';
    this._type = 'FHIR::Contract';
  }
}

module.exports.ContractSchema = ContractSchema;
module.exports.Contract = Contract;
