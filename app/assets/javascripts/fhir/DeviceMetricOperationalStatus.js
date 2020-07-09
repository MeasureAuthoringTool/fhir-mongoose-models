const { ElementSchema } = require('./Element');
const { DeviceMetricOperationalStatusSchema } = require('./allSchemaHeaders.js');

DeviceMetricOperationalStatusSchema.add(ElementSchema);
DeviceMetricOperationalStatusSchema.remove('id');
DeviceMetricOperationalStatusSchema.add({
  value: String,
});

module.exports.DeviceMetricOperationalStatusSchema = DeviceMetricOperationalStatusSchema;
