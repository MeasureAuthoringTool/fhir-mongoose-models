const { ElementSchema } = require('./Element');
const { TriggerTypeSchema } = require('./allSchemaHeaders.js');

TriggerTypeSchema.add(ElementSchema);
TriggerTypeSchema.remove('id');
TriggerTypeSchema.add({
  value: String,
});

module.exports.TriggerTypeSchema = TriggerTypeSchema;
