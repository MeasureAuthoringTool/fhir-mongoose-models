const { ElementSchema } = require('./Element');
const { BindingStrengthSchema } = require('./allSchemaHeaders.js');

BindingStrengthSchema.add(ElementSchema);
BindingStrengthSchema.remove('id');
BindingStrengthSchema.add({
  value: String,
});

module.exports.BindingStrengthSchema = BindingStrengthSchema;
