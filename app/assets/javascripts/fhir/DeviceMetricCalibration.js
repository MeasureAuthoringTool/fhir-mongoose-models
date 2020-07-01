const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DeviceMetricCalibrationStateSchema } = require('./DeviceMetricCalibrationState');
const { DeviceMetricCalibrationTypeSchema } = require('./DeviceMetricCalibrationType');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');

const DeviceMetricCalibrationSchema = BackboneElementSchemaFunction({
  type: DeviceMetricCalibrationTypeSchema,
  state: DeviceMetricCalibrationStateSchema,
  time: PrimitiveInstantSchema,
  typeName: { type: String, default: 'DeviceMetricCalibration' },
  _type: { type: String, default: 'FHIR::DeviceMetricCalibration' },
});

class DeviceMetricCalibration extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCalibrationSchema);
    this.typeName = 'DeviceMetricCalibration';
    this._type = 'FHIR::DeviceMetricCalibration';
  }
}

module.exports.DeviceMetricCalibrationSchema = DeviceMetricCalibrationSchema;
module.exports.DeviceMetricCalibration = DeviceMetricCalibration;
