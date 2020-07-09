const { ElementSchema } = require('./Element');
const { VariableTypeSchema } = require('./allSchemaHeaders.js');

VariableTypeSchema.add(ElementSchema);
VariableTypeSchema.remove('id');
VariableTypeSchema.add({
  value: String,
});

module.exports.VariableTypeSchema = VariableTypeSchema;
