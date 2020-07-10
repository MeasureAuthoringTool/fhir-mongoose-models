const { ElementSchema } = require('./Element');
const { OperationParameterUseSchema } = require('./allSchemaHeaders.js');

OperationParameterUseSchema.add(ElementSchema);
OperationParameterUseSchema.remove('id');
OperationParameterUseSchema.add({
  value: String,
});

module.exports.OperationParameterUseSchema = OperationParameterUseSchema;
