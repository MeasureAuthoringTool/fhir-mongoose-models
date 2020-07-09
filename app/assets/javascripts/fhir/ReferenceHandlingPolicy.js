const { ElementSchema } = require('./Element');
const { ReferenceHandlingPolicySchema } = require('./allSchemaHeaders.js');

ReferenceHandlingPolicySchema.add(ElementSchema);
ReferenceHandlingPolicySchema.remove('id');
ReferenceHandlingPolicySchema.add({
  value: String,
});

module.exports.ReferenceHandlingPolicySchema = ReferenceHandlingPolicySchema;
