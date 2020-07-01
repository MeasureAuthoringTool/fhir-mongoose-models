const mongoose = require('mongoose/browser');
const { DayOfWeekSchema } = require('./DayOfWeek');
const { DurationSchema } = require('./Duration');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { EventTimingSchema } = require('./EventTiming');
const { PeriodSchema } = require('./Period');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveTimeSchema } = require('./PrimitiveTime');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { RangeSchema } = require('./Range');
const { UnitsOfTimeSchema } = require('./UnitsOfTime');

const TimingRepeatSchema = ElementSchemaFunction({
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
  typeName: { type: String, default: 'TimingRepeat' },
  _type: { type: String, default: 'FHIR::TimingRepeat' },
});

class TimingRepeat extends mongoose.Document {
  constructor(object) {
    super(object, TimingRepeatSchema);
    this.typeName = 'TimingRepeat';
    this._type = 'FHIR::TimingRepeat';
  }
}

module.exports.TimingRepeatSchema = TimingRepeatSchema;
module.exports.TimingRepeat = TimingRepeat;
