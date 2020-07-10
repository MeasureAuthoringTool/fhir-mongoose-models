const { BackboneElementSchema } = require('./BackboneElement');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { SubscriptionChannelTypeSchema } = require('./allSchemaHeaders.js');
const { SubscriptionChannelSchema } = require('./allSchemaHeaders.js');

SubscriptionChannelSchema.add(BackboneElementSchema);
SubscriptionChannelSchema.remove('id');
SubscriptionChannelSchema.add({
  type: SubscriptionChannelTypeSchema,
  endpoint: PrimitiveUrlSchema,
  payload: MimeTypeSchema,
  header: [PrimitiveStringSchema],
});

module.exports.SubscriptionChannelSchema = SubscriptionChannelSchema;
