const { ElementSchema } = require('./Element');
const { DeviceRequestStatusSchema } = require('./allSchemaHeaders.js');

DeviceRequestStatusSchema.add(ElementSchema);
DeviceRequestStatusSchema.remove('id');
DeviceRequestStatusSchema.add({
  value: String,
});

module.exports.DeviceRequestStatusSchema = DeviceRequestStatusSchema;
