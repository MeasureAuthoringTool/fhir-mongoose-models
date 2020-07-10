const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { MessageDefinitionFocusSchema } = require('./allSchemaHeaders.js');

MessageDefinitionFocusSchema.add(BackboneElementSchema);
MessageDefinitionFocusSchema.remove('id');
MessageDefinitionFocusSchema.add({
  code: ResourceTypeSchema,
  profile: PrimitiveCanonicalSchema,
  min: PrimitiveUnsignedIntSchema,
  max: PrimitiveStringSchema,
});

module.exports.MessageDefinitionFocusSchema = MessageDefinitionFocusSchema;
