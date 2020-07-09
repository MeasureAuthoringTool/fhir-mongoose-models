const { ElementSchema } = require('./Element');
const { ReferredDocumentStatusSchema } = require('./allSchemaHeaders.js');

ReferredDocumentStatusSchema.add(ElementSchema);
ReferredDocumentStatusSchema.remove('id');
ReferredDocumentStatusSchema.add({
  value: String,
});

module.exports.ReferredDocumentStatusSchema = ReferredDocumentStatusSchema;
