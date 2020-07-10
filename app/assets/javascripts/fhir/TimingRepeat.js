const { DayOfWeekSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { EventTimingSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { UnitsOfTimeSchema } = require('./allSchemaHeaders.js');
const { TimingRepeatSchema } = require('./allSchemaHeaders.js');

TimingRepeatSchema.add(ElementSchema);
TimingRepeatSchema.remove('id');
TimingRepeatSchema.add({
  boundsDuration: DurationSchema,
  boundsRange: RangeSchema,
  boundsPeriod: PeriodSchema,
  count: PrimitivePositiveIntSchema,
  countMax: PrimitivePositiveIntSchema,
  duration: PrimitiveDecimalSchema,
  durationMax: PrimitiveDecimalSchema,
  durationUnit: UnitsOfTimeSchema,
  frequency: PrimitivePositiveIntSchema,
  frequencyMax: PrimitivePositiveIntSchema,
  period: PrimitiveDecimalSchema,
  periodMax: PrimitiveDecimalSchema,
  periodUnit: UnitsOfTimeSchema,
  dayOfWeek: [DayOfWeekSchema],
  timeOfDay: [PrimitiveTimeSchema],
  when: [EventTimingSchema],
  offset: PrimitiveUnsignedIntSchema,
});

module.exports.TimingRepeatSchema = TimingRepeatSchema;
