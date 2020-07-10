const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionSpecializationSchema } = require('./allSchemaHeaders.js');

DeviceDefinitionSpecializationSchema.add(BackboneElementSchema);
DeviceDefinitionSpecializationSchema.remove('id');
DeviceDefinitionSpecializationSchema.add({
  systemType: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
});

module.exports.DeviceDefinitionSpecializationSchema = DeviceDefinitionSpecializationSchema;
