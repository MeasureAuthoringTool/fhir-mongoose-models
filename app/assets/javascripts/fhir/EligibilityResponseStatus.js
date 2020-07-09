const { ElementSchema } = require('./Element');
const { EligibilityResponseStatusSchema } = require('./allSchemaHeaders.js');

EligibilityResponseStatusSchema.add(ElementSchema);
EligibilityResponseStatusSchema.remove('id');
EligibilityResponseStatusSchema.add({
  value: String,
});

module.exports.EligibilityResponseStatusSchema = EligibilityResponseStatusSchema;
