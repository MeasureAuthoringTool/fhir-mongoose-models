const { CodingSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SignatureSchema } = require('./allSchemaHeaders.js');

SignatureSchema.add(ElementSchema);
SignatureSchema.remove('id');
SignatureSchema.add({
  type: [CodingSchema],
  when: PrimitiveInstantSchema,
  who: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  targetFormat: MimeTypeSchema,
  sigFormat: MimeTypeSchema,
  data: PrimitiveBase64BinarySchema,
});

module.exports.SignatureSchema = SignatureSchema;
