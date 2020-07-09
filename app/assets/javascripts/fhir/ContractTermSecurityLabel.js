const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ContractTermSecurityLabelSchema } = require('./allSchemaHeaders.js');

ContractTermSecurityLabelSchema.add(BackboneElementSchema);
ContractTermSecurityLabelSchema.remove('id');
ContractTermSecurityLabelSchema.add({
  number: [PrimitiveUnsignedIntSchema],
  classification: CodingSchema,
  category: [CodingSchema],
  control: [CodingSchema],
});

module.exports.ContractTermSecurityLabelSchema = ContractTermSecurityLabelSchema;
