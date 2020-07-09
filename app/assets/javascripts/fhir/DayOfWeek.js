const { ElementSchema } = require('./Element');
const { DayOfWeekSchema } = require('./allSchemaHeaders.js');

DayOfWeekSchema.add(ElementSchema);
DayOfWeekSchema.remove('id');
DayOfWeekSchema.add({
  value: String,
});

module.exports.DayOfWeekSchema = DayOfWeekSchema;
