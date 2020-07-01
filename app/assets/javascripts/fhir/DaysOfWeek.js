const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DaysOfWeekSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DaysOfWeek' },
  _type: { type: String, default: 'FHIR::DaysOfWeek' },
});

class DaysOfWeek extends mongoose.Document {
  constructor(object) {
    super(object, DaysOfWeekSchema);
    this.typeName = 'DaysOfWeek';
    this._type = 'FHIR::DaysOfWeek';
  }
}

module.exports.DaysOfWeekSchema = DaysOfWeekSchema;
module.exports.DaysOfWeek = DaysOfWeek;
