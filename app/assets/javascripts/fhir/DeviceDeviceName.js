const { BackboneElementSchema } = require('./BackboneElement');
const { DeviceNameTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { DeviceDeviceNameSchema } = require('./allSchemaHeaders.js');

DeviceDeviceNameSchema.add(BackboneElementSchema);
DeviceDeviceNameSchema.remove('id');
DeviceDeviceNameSchema.add({
  name: PrimitiveStringSchema,
  type: DeviceNameTypeSchema,
});

module.exports.DeviceDeviceNameSchema = DeviceDeviceNameSchema;
