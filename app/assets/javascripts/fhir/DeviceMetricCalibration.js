const { BackboneElementSchema } = require('./BackboneElement');
const { DeviceMetricCalibrationStateSchema } = require('./allSchemaHeaders.js');
const { DeviceMetricCalibrationTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { DeviceMetricCalibrationSchema } = require('./allSchemaHeaders.js');

DeviceMetricCalibrationSchema.add(BackboneElementSchema);
DeviceMetricCalibrationSchema.remove('id');
DeviceMetricCalibrationSchema.add({
  type: DeviceMetricCalibrationTypeSchema,
  state: DeviceMetricCalibrationStateSchema,
  time: PrimitiveInstantSchema,
});

module.exports.DeviceMetricCalibrationSchema = DeviceMetricCalibrationSchema;
