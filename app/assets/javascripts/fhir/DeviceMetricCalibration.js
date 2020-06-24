const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { DeviceMetricCalibrationStateSchema } = require('./DeviceMetricCalibrationState');
const { DeviceMetricCalibrationTypeSchema } = require('./DeviceMetricCalibrationType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceMetricCalibrationSchema = BackboneElementSchemaFunction({
   type : DeviceMetricCalibrationTypeSchema,
   state : DeviceMetricCalibrationStateSchema,
   time : DateTime,
   fhirTitle: { type: String, default: 'DeviceMetricCalibration' },
});

class DeviceMetricCalibration extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCalibrationSchema);
    this._type = 'FHIR::DeviceMetricCalibration';
  }
};


module.exports.DeviceMetricCalibrationSchema = DeviceMetricCalibrationSchema;
module.exports.DeviceMetricCalibration = DeviceMetricCalibration;
