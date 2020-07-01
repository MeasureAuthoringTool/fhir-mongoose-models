const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CompartmentCodeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CompartmentCode' },
  _type: { type: String, default: 'FHIR::CompartmentCode' },
});

class CompartmentCode extends mongoose.Document {
  constructor(object) {
    super(object, CompartmentCodeSchema);
    this.typeName = 'CompartmentCode';
    this._type = 'FHIR::CompartmentCode';
  }
}

module.exports.CompartmentCodeSchema = CompartmentCodeSchema;
module.exports.CompartmentCode = CompartmentCode;
