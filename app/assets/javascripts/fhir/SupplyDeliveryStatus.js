const { ElementSchema } = require('./Element');
const { SupplyDeliveryStatusSchema } = require('./allSchemaHeaders.js');

SupplyDeliveryStatusSchema.add(ElementSchema);
SupplyDeliveryStatusSchema.remove('id');
SupplyDeliveryStatusSchema.add({
  value: String,
});

module.exports.SupplyDeliveryStatusSchema = SupplyDeliveryStatusSchema;
