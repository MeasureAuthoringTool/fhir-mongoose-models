const { ElementSchema } = require('./Element');
const { EligibilityRequestStatusSchema } = require('./allSchemaHeaders.js');

EligibilityRequestStatusSchema.add(ElementSchema);
EligibilityRequestStatusSchema.remove('id');
EligibilityRequestStatusSchema.add({
  value: String,
});

module.exports.EligibilityRequestStatusSchema = EligibilityRequestStatusSchema;
