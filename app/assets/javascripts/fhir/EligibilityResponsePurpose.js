const { ElementSchema } = require('./Element');
const { EligibilityResponsePurposeSchema } = require('./allSchemaHeaders.js');

EligibilityResponsePurposeSchema.add(ElementSchema);
EligibilityResponsePurposeSchema.remove('id');
EligibilityResponsePurposeSchema.add({
  value: String,
});

module.exports.EligibilityResponsePurposeSchema = EligibilityResponsePurposeSchema;
