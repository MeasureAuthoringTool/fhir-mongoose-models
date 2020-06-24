const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DayOfWeekSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DayOfWeek' },
});

class DayOfWeek extends mongoose.Document {
  constructor(object) {
    super(object, DayOfWeekSchema);
    this._type = 'FHIR::DayOfWeek';
  }
};


module.exports.DayOfWeekSchema = DayOfWeekSchema;
module.exports.DayOfWeek = DayOfWeek;
