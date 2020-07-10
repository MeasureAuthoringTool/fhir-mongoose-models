const { ElementSchema } = require('./Element');
const { DocumentConfidentialitySchema } = require('./allSchemaHeaders.js');

DocumentConfidentialitySchema.add(ElementSchema);
DocumentConfidentialitySchema.remove('id');
DocumentConfidentialitySchema.add({
  value: String,
});

module.exports.DocumentConfidentialitySchema = DocumentConfidentialitySchema;
