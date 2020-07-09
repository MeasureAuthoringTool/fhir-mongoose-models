const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ContractTermOfferPartySchema } = require('./allSchemaHeaders.js');

ContractTermOfferPartySchema.add(BackboneElementSchema);
ContractTermOfferPartySchema.remove('id');
ContractTermOfferPartySchema.add({
  reference: [ReferenceSchema],
  role: CodeableConceptSchema,
});

module.exports.ContractTermOfferPartySchema = ContractTermOfferPartySchema;
