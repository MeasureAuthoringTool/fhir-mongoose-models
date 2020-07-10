const { ElementSchema } = require('./Element');
const { ContractPublicationStatusSchema } = require('./allSchemaHeaders.js');

ContractPublicationStatusSchema.add(ElementSchema);
ContractPublicationStatusSchema.remove('id');
ContractPublicationStatusSchema.add({
  value: String,
});

module.exports.ContractPublicationStatusSchema = ContractPublicationStatusSchema;
