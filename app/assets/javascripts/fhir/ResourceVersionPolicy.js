const { ElementSchema } = require('./Element');
const { ResourceVersionPolicySchema } = require('./allSchemaHeaders.js');

ResourceVersionPolicySchema.add(ElementSchema);
ResourceVersionPolicySchema.remove('id');
ResourceVersionPolicySchema.add({
  value: String,
});

module.exports.ResourceVersionPolicySchema = ResourceVersionPolicySchema;
