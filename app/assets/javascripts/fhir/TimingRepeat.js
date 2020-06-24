const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { DayOfWeekSchema } = require('./DayOfWeek');
const { DurationSchema } = require('./Duration');
const { ElementSchema } = require('./Element');
const { EventTimingSchema } = require('./EventTiming');
const { PeriodSchema } = require('./Period');
const { RangeSchema } = require('./Range');
const { UnitsOfTimeSchema } = require('./UnitsOfTime');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TimingRepeatSchema = ElementSchemaFunction({
   boundsDuration : DurationSchema,
   boundsRange : RangeSchema,
   boundsPeriod : PeriodSchema,
   count : Number,
   countMax : Number,
   duration : Number,
   durationMax : Number,
   durationUnit : UnitsOfTimeSchema,
   frequency : Number,
   frequencyMax : Number,
   period : Number,
   periodMax : Number,
   periodUnit : UnitsOfTimeSchema,
   dayOfWeek : [DayOfWeekSchema],
   timeOfDay : [DateTime],
   when : [EventTimingSchema],
   offset : Number,
   fhirTitle: { type: String, default: 'TimingRepeat' },
});

class TimingRepeat extends mongoose.Document {
  constructor(object) {
    super(object, TimingRepeatSchema);
    this._type = 'FHIR::TimingRepeat';
  }
};


module.exports.TimingRepeatSchema = TimingRepeatSchema;
module.exports.TimingRepeat = TimingRepeat;
