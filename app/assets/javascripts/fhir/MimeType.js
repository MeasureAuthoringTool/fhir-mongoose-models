const { ElementSchema } = require('./Element');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');

MimeTypeSchema.add(ElementSchema);
MimeTypeSchema.remove('id');
MimeTypeSchema.add({
  value: String,
});

module.exports.MimeTypeSchema = MimeTypeSchema;
