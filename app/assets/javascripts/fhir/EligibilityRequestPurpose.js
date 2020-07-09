const { ElementSchema } = require('./Element');
const { EligibilityRequestPurposeSchema } = require('./allSchemaHeaders.js');

EligibilityRequestPurposeSchema.add(ElementSchema);
EligibilityRequestPurposeSchema.remove('id');
EligibilityRequestPurposeSchema.add({
  value: String,
});

module.exports.EligibilityRequestPurposeSchema = EligibilityRequestPurposeSchema;
