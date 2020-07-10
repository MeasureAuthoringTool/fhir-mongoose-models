const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MessageHeaderDestinationSchema } = require('./allSchemaHeaders.js');

MessageHeaderDestinationSchema.add(BackboneElementSchema);
MessageHeaderDestinationSchema.remove('id');
MessageHeaderDestinationSchema.add({
  name: PrimitiveStringSchema,
  target: ReferenceSchema,
  endpoint: PrimitiveUrlSchema,
  receiver: ReferenceSchema,
});

module.exports.MessageHeaderDestinationSchema = MessageHeaderDestinationSchema;
