const { ElementSchema } = require('./Element');
const { TypeDerivationRuleSchema } = require('./allSchemaHeaders.js');

TypeDerivationRuleSchema.add(ElementSchema);
TypeDerivationRuleSchema.remove('id');
TypeDerivationRuleSchema.add({
  value: String,
});

module.exports.TypeDerivationRuleSchema = TypeDerivationRuleSchema;
