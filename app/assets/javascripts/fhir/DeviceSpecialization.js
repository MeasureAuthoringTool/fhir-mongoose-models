const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { DeviceSpecializationSchema } = require('./allSchemaHeaders.js');

DeviceSpecializationSchema.add(BackboneElementSchema);
DeviceSpecializationSchema.remove('id');
DeviceSpecializationSchema.add({
  systemType: CodeableConceptSchema,
  version: PrimitiveStringSchema,
});

module.exports.DeviceSpecializationSchema = DeviceSpecializationSchema;
