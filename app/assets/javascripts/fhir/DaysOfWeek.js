const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DaysOfWeekSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DaysOfWeek' },
});

class DaysOfWeek extends mongoose.Document {
  constructor(object) {
    super(object, DaysOfWeekSchema);
    this._type = 'FHIR::DaysOfWeek';
  }
};


module.exports.DaysOfWeekSchema = DaysOfWeekSchema;
module.exports.DaysOfWeek = DaysOfWeek;
