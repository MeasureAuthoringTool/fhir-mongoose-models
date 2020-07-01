const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const UnitsOfTimeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'UnitsOfTime' },
  _type: { type: String, default: 'FHIR::UnitsOfTime' },
});

class UnitsOfTime extends mongoose.Document {
  constructor(object) {
    super(object, UnitsOfTimeSchema);
    this.typeName = 'UnitsOfTime';
    this._type = 'FHIR::UnitsOfTime';
  }
}

module.exports.UnitsOfTimeSchema = UnitsOfTimeSchema;
module.exports.UnitsOfTime = UnitsOfTime;
