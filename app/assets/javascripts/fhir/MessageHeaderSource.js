const { BackboneElementSchema } = require('./BackboneElement');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { MessageHeaderSourceSchema } = require('./allSchemaHeaders.js');

MessageHeaderSourceSchema.add(BackboneElementSchema);
MessageHeaderSourceSchema.remove('id');
MessageHeaderSourceSchema.add({
  name: PrimitiveStringSchema,
  software: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
  contact: ContactPointSchema,
  endpoint: PrimitiveUrlSchema,
});

module.exports.MessageHeaderSourceSchema = MessageHeaderSourceSchema;
