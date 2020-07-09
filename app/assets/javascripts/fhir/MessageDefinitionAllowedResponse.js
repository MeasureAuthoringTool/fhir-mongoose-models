const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { MessageDefinitionAllowedResponseSchema } = require('./allSchemaHeaders.js');

MessageDefinitionAllowedResponseSchema.add(BackboneElementSchema);
MessageDefinitionAllowedResponseSchema.remove('id');
MessageDefinitionAllowedResponseSchema.add({
  message: PrimitiveCanonicalSchema,
  situation: PrimitiveMarkdownSchema,
});

module.exports.MessageDefinitionAllowedResponseSchema = MessageDefinitionAllowedResponseSchema;
