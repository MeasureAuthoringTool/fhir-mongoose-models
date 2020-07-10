const { ElementSchema } = require('./Element');
const { DeviceNameTypeSchema } = require('./allSchemaHeaders.js');

DeviceNameTypeSchema.add(ElementSchema);
DeviceNameTypeSchema.remove('id');
DeviceNameTypeSchema.add({
  value: String,
});

module.exports.DeviceNameTypeSchema = DeviceNameTypeSchema;
