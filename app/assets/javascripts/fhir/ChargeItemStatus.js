const { ElementSchema } = require('./Element');
const { ChargeItemStatusSchema } = require('./allSchemaHeaders.js');

ChargeItemStatusSchema.add(ElementSchema);
ChargeItemStatusSchema.remove('id');
ChargeItemStatusSchema.add({
  value: String,
});

module.exports.ChargeItemStatusSchema = ChargeItemStatusSchema;
