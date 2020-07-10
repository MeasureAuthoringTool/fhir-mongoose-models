const { ElementSchema } = require('./Element');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { AttachmentSchema } = require('./allSchemaHeaders.js');

AttachmentSchema.add(ElementSchema);
AttachmentSchema.remove('id');
AttachmentSchema.add({
  contentType: MimeTypeSchema,
  language: PrimitiveCodeSchema,
  data: PrimitiveBase64BinarySchema,
  url: PrimitiveUrlSchema,
  size: PrimitiveUnsignedIntSchema,
  hash: PrimitiveBase64BinarySchema,
  title: PrimitiveStringSchema,
  creation: PrimitiveDateTimeSchema,
});

module.exports.AttachmentSchema = AttachmentSchema;
