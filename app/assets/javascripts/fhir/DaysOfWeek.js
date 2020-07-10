const { ElementSchema } = require('./Element');
const { DaysOfWeekSchema } = require('./allSchemaHeaders.js');

DaysOfWeekSchema.add(ElementSchema);
DaysOfWeekSchema.remove('id');
DaysOfWeekSchema.add({
  value: String,
});

module.exports.DaysOfWeekSchema = DaysOfWeekSchema;
