const { ElementSchema } = require('./Element');
const { DeviceMetricCategorySchema } = require('./allSchemaHeaders.js');

DeviceMetricCategorySchema.add(ElementSchema);
DeviceMetricCategorySchema.remove('id');
DeviceMetricCategorySchema.add({
  value: String,
});

module.exports.DeviceMetricCategorySchema = DeviceMetricCategorySchema;
