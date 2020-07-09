const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ResponseTypeSchema } = require('./allSchemaHeaders.js');
const { MessageHeaderResponseSchema } = require('./allSchemaHeaders.js');

MessageHeaderResponseSchema.add(BackboneElementSchema);
MessageHeaderResponseSchema.remove('id');
MessageHeaderResponseSchema.add({
  identifier: PrimitiveIdSchema,
  code: ResponseTypeSchema,
  details: ReferenceSchema,
});

module.exports.MessageHeaderResponseSchema = MessageHeaderResponseSchema;
