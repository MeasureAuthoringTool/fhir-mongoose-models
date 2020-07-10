const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SignatureSchema } = require('./allSchemaHeaders.js');
const { ContractSignerSchema } = require('./allSchemaHeaders.js');

ContractSignerSchema.add(BackboneElementSchema);
ContractSignerSchema.remove('id');
ContractSignerSchema.add({
  type: CodingSchema,
  party: ReferenceSchema,
  signature: [SignatureSchema],
});

module.exports.ContractSignerSchema = ContractSignerSchema;
