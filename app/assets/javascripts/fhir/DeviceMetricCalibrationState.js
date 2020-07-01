const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceMetricCalibrationStateSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceMetricCalibrationState' },
  _type: { type: String, default: 'FHIR::DeviceMetricCalibrationState' },
});

class DeviceMetricCalibrationState extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCalibrationStateSchema);
    this.typeName = 'DeviceMetricCalibrationState';
    this._type = 'FHIR::DeviceMetricCalibrationState';
  }
}

module.exports.DeviceMetricCalibrationStateSchema = DeviceMetricCalibrationStateSchema;
module.exports.DeviceMetricCalibrationState = DeviceMetricCalibrationState;
