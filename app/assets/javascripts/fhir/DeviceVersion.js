const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { DeviceVersionSchema } = require('./allSchemaHeaders.js');

DeviceVersionSchema.add(BackboneElementSchema);
DeviceVersionSchema.remove('id');
DeviceVersionSchema.add({
  type: CodeableConceptSchema,
  component: IdentifierSchema,
  value: PrimitiveStringSchema,
});

module.exports.DeviceVersionSchema = DeviceVersionSchema;
