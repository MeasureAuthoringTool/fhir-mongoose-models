const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ResourceSchema } = require('./Resource');
const { BinarySchema } = require('./allSchemaHeaders.js');

BinarySchema.add(ResourceSchema);
BinarySchema.remove('id');
BinarySchema.add({
  contentType: MimeTypeSchema,
  securityContext: ReferenceSchema,
  data: PrimitiveBase64BinarySchema,
});

module.exports.BinarySchema = BinarySchema;
