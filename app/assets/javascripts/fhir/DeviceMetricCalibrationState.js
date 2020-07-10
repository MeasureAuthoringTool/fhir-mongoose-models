const { ElementSchema } = require('./Element');
const { DeviceMetricCalibrationStateSchema } = require('./allSchemaHeaders.js');

DeviceMetricCalibrationStateSchema.add(ElementSchema);
DeviceMetricCalibrationStateSchema.remove('id');
DeviceMetricCalibrationStateSchema.add({
  value: String,
});

module.exports.DeviceMetricCalibrationStateSchema = DeviceMetricCalibrationStateSchema;
