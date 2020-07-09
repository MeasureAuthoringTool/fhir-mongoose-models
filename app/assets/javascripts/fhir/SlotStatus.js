const { ElementSchema } = require('./Element');
const { SlotStatusSchema } = require('./allSchemaHeaders.js');

SlotStatusSchema.add(ElementSchema);
SlotStatusSchema.remove('id');
SlotStatusSchema.add({
  value: String,
});

module.exports.SlotStatusSchema = SlotStatusSchema;
