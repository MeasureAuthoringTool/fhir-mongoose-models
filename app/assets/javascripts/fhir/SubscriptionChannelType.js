const { ElementSchema } = require('./Element');
const { SubscriptionChannelTypeSchema } = require('./allSchemaHeaders.js');

SubscriptionChannelTypeSchema.add(ElementSchema);
SubscriptionChannelTypeSchema.remove('id');
SubscriptionChannelTypeSchema.add({
  value: String,
});

module.exports.SubscriptionChannelTypeSchema = SubscriptionChannelTypeSchema;
