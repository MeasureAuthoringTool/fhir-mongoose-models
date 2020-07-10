const { ElementSchema } = require('./Element');
const { SupplyRequestStatusSchema } = require('./allSchemaHeaders.js');

SupplyRequestStatusSchema.add(ElementSchema);
SupplyRequestStatusSchema.remove('id');
SupplyRequestStatusSchema.add({
  value: String,
});

module.exports.SupplyRequestStatusSchema = SupplyRequestStatusSchema;
