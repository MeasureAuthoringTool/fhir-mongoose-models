const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceMetricCalibrationTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceMetricCalibrationType' },
  _type: { type: String, default: 'FHIR::DeviceMetricCalibrationType' },
});

class DeviceMetricCalibrationType extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCalibrationTypeSchema);
    this.typeName = 'DeviceMetricCalibrationType';
    this._type = 'FHIR::DeviceMetricCalibrationType';
  }
}

module.exports.DeviceMetricCalibrationTypeSchema = DeviceMetricCalibrationTypeSchema;
module.exports.DeviceMetricCalibrationType = DeviceMetricCalibrationType;
