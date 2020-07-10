const { BackboneElementSchema } = require('./BackboneElement');
const { DeviceNameTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionDeviceNameSchema } = require('./allSchemaHeaders.js');

DeviceDefinitionDeviceNameSchema.add(BackboneElementSchema);
DeviceDefinitionDeviceNameSchema.remove('id');
DeviceDefinitionDeviceNameSchema.add({
  name: PrimitiveStringSchema,
  type: DeviceNameTypeSchema,
});

module.exports.DeviceDefinitionDeviceNameSchema = DeviceDefinitionDeviceNameSchema;
