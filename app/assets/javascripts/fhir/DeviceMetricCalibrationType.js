const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceMetricCalibrationTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DeviceMetricCalibrationType' },
});

class DeviceMetricCalibrationType extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCalibrationTypeSchema);
    this._type = 'FHIR::DeviceMetricCalibrationType';
  }
};


module.exports.DeviceMetricCalibrationTypeSchema = DeviceMetricCalibrationTypeSchema;
module.exports.DeviceMetricCalibrationType = DeviceMetricCalibrationType;
