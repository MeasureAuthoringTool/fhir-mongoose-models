const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContractContentDefinitionSchema } = require('./allSchemaHeaders.js');
const { ContractFriendlySchema } = require('./allSchemaHeaders.js');
const { ContractLegalSchema } = require('./allSchemaHeaders.js');
const { ContractRuleSchema } = require('./allSchemaHeaders.js');
const { ContractSignerSchema } = require('./allSchemaHeaders.js');
const { ContractStatusSchema } = require('./allSchemaHeaders.js');
const { ContractTermSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractSchema } = require('./allSchemaHeaders.js');

ContractSchema.add(DomainResourceSchema);
ContractSchema.remove('id');
ContractSchema.add({
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
});

module.exports.ContractSchema = ContractSchema;
