const { ElementSchema } = require('./Element');
const { DeviceMetricColorSchema } = require('./allSchemaHeaders.js');

DeviceMetricColorSchema.add(ElementSchema);
DeviceMetricColorSchema.remove('id');
DeviceMetricColorSchema.add({
  value: String,
});

module.exports.DeviceMetricColorSchema = DeviceMetricColorSchema;
