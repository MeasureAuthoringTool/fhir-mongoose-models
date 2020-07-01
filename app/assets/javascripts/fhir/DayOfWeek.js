const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DayOfWeekSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DayOfWeek' },
  _type: { type: String, default: 'FHIR::DayOfWeek' },
});

class DayOfWeek extends mongoose.Document {
  constructor(object) {
    super(object, DayOfWeekSchema);
    this.typeName = 'DayOfWeek';
    this._type = 'FHIR::DayOfWeek';
  }
}

module.exports.DayOfWeekSchema = DayOfWeekSchema;
module.exports.DayOfWeek = DayOfWeek;
