const { ElementSchema } = require('./Element');
const { DocumentReferenceStatusSchema } = require('./allSchemaHeaders.js');

DocumentReferenceStatusSchema.add(ElementSchema);
DocumentReferenceStatusSchema.remove('id');
DocumentReferenceStatusSchema.add({
  value: String,
});

module.exports.DocumentReferenceStatusSchema = DocumentReferenceStatusSchema;
