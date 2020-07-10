const { ElementSchema } = require('./Element');
const { SubscriptionStatusSchema } = require('./allSchemaHeaders.js');

SubscriptionStatusSchema.add(ElementSchema);
SubscriptionStatusSchema.remove('id');
SubscriptionStatusSchema.add({
  value: String,
});

module.exports.SubscriptionStatusSchema = SubscriptionStatusSchema;
