const { ElementSchema } = require('./Element');
const { RemittanceOutcomeSchema } = require('./allSchemaHeaders.js');

RemittanceOutcomeSchema.add(ElementSchema);
RemittanceOutcomeSchema.remove('id');
RemittanceOutcomeSchema.add({
  value: String,
});

module.exports.RemittanceOutcomeSchema = RemittanceOutcomeSchema;
