const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceMetricCalibrationStateSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DeviceMetricCalibrationState' },
});

class DeviceMetricCalibrationState extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCalibrationStateSchema);
    this._type = 'FHIR::DeviceMetricCalibrationState';
  }
};


module.exports.DeviceMetricCalibrationStateSchema = DeviceMetricCalibrationStateSchema;
module.exports.DeviceMetricCalibrationState = DeviceMetricCalibrationState;
