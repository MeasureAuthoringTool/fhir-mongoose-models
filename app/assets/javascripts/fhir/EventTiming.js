const { ElementSchema } = require('./Element');
const { EventTimingSchema } = require('./allSchemaHeaders.js');

EventTimingSchema.add(ElementSchema);
EventTimingSchema.remove('id');
EventTimingSchema.add({
  value: String,
});

module.exports.EventTimingSchema = EventTimingSchema;
