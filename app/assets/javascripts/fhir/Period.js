const { ElementSchema } = require('./Element');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');

PeriodSchema.add(ElementSchema);
PeriodSchema.remove('id');
PeriodSchema.add({
  start: PrimitiveDateTimeSchema,
  end: PrimitiveDateTimeSchema,
});

module.exports.PeriodSchema = PeriodSchema;
