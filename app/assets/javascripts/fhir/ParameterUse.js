const { ElementSchema } = require('./Element');
const { ParameterUseSchema } = require('./allSchemaHeaders.js');

ParameterUseSchema.add(ElementSchema);
ParameterUseSchema.remove('id');
ParameterUseSchema.add({
  value: String,
});

module.exports.ParameterUseSchema = ParameterUseSchema;
