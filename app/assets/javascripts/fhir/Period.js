const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PeriodSchema = ElementSchemaFunction({
   start : DateTime,
   end : DateTime,
   fhirTitle: { type: String, default: 'Period' },
});

class Period extends mongoose.Document {
  constructor(object) {
    super(object, PeriodSchema);
    this._type = 'FHIR::Period';
  }
};


module.exports.PeriodSchema = PeriodSchema;
module.exports.Period = Period;
