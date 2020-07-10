const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionUdiDeviceIdentifierSchema } = require('./allSchemaHeaders.js');

DeviceDefinitionUdiDeviceIdentifierSchema.add(BackboneElementSchema);
DeviceDefinitionUdiDeviceIdentifierSchema.remove('id');
DeviceDefinitionUdiDeviceIdentifierSchema.add({
  deviceIdentifier: PrimitiveStringSchema,
  issuer: PrimitiveUriSchema,
  jurisdiction: PrimitiveUriSchema,
});

module.exports.DeviceDefinitionUdiDeviceIdentifierSchema = DeviceDefinitionUdiDeviceIdentifierSchema;
