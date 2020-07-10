const { ElementSchema } = require('./Element');
const { DocumentModeSchema } = require('./allSchemaHeaders.js');

DocumentModeSchema.add(ElementSchema);
DocumentModeSchema.remove('id');
DocumentModeSchema.add({
  value: String,
});

module.exports.DocumentModeSchema = DocumentModeSchema;
