const { ElementSchema } = require('./Element');
const { EventCapabilityModeSchema } = require('./allSchemaHeaders.js');

EventCapabilityModeSchema.add(ElementSchema);
EventCapabilityModeSchema.remove('id');
EventCapabilityModeSchema.add({
  value: String,
});

module.exports.EventCapabilityModeSchema = EventCapabilityModeSchema;
