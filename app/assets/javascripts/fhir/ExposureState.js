const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ExposureStateSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ExposureState' },
  _type: { type: String, default: 'FHIR::ExposureState' },
});

class ExposureState extends mongoose.Document {
  constructor(object) {
    super(object, ExposureStateSchema);
    this.typeName = 'ExposureState';
    this._type = 'FHIR::ExposureState';
  }
}

module.exports.ExposureStateSchema = ExposureStateSchema;
module.exports.ExposureState = ExposureState;
