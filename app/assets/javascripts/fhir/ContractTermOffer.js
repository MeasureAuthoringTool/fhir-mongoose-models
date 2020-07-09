const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContractTermOfferAnswerSchema } = require('./allSchemaHeaders.js');
const { ContractTermOfferPartySchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractTermOfferSchema } = require('./allSchemaHeaders.js');

ContractTermOfferSchema.add(BackboneElementSchema);
ContractTermOfferSchema.remove('id');
ContractTermOfferSchema.add({
  identifier: [IdentifierSchema],
  party: [ContractTermOfferPartySchema],
  topic: ReferenceSchema,
  type: CodeableConceptSchema,
  decision: CodeableConceptSchema,
  decisionMode: [CodeableConceptSchema],
  answer: [ContractTermOfferAnswerSchema],
  text: PrimitiveStringSchema,
  linkId: [PrimitiveStringSchema],
  securityLabelNumber: [PrimitiveUnsignedIntSchema],
});

module.exports.ContractTermOfferSchema = ContractTermOfferSchema;
