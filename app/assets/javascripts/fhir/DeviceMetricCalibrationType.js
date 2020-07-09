const { ElementSchema } = require('./Element');
const { DeviceMetricCalibrationTypeSchema } = require('./allSchemaHeaders.js');

DeviceMetricCalibrationTypeSchema.add(ElementSchema);
DeviceMetricCalibrationTypeSchema.remove('id');
DeviceMetricCalibrationTypeSchema.add({
  value: String,
});

module.exports.DeviceMetricCalibrationTypeSchema = DeviceMetricCalibrationTypeSchema;
