const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubscriptionChannelSchema } = require('./allSchemaHeaders.js');
const { SubscriptionStatusSchema } = require('./allSchemaHeaders.js');
const { SubscriptionSchema } = require('./allSchemaHeaders.js');

SubscriptionSchema.add(DomainResourceSchema);
SubscriptionSchema.remove('id');
SubscriptionSchema.add({
  status: SubscriptionStatusSchema,
  contact: [ContactPointSchema],
  end: PrimitiveInstantSchema,
  reason: PrimitiveStringSchema,
  criteria: PrimitiveStringSchema,
  error: PrimitiveStringSchema,
  channel: SubscriptionChannelSchema,
});

module.exports.SubscriptionSchema = SubscriptionSchema;
