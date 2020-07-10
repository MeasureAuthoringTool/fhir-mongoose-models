const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DeviceDefinitionCapabilitySchema } = require('./allSchemaHeaders.js');

DeviceDefinitionCapabilitySchema.add(BackboneElementSchema);
DeviceDefinitionCapabilitySchema.remove('id');
DeviceDefinitionCapabilitySchema.add({
  type: CodeableConceptSchema,
  description: [CodeableConceptSchema],
});

module.exports.DeviceDefinitionCapabilitySchema = DeviceDefinitionCapabilitySchema;
