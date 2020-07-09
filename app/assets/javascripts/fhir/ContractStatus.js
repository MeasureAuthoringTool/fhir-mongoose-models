const { ElementSchema } = require('./Element');
const { ContractStatusSchema } = require('./allSchemaHeaders.js');

ContractStatusSchema.add(ElementSchema);
ContractStatusSchema.remove('id');
ContractStatusSchema.add({
  value: String,
});

module.exports.ContractStatusSchema = ContractStatusSchema;
