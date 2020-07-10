const { ElementSchema } = require('./Element');
const { DocumentRelationshipTypeSchema } = require('./allSchemaHeaders.js');

DocumentRelationshipTypeSchema.add(ElementSchema);
DocumentRelationshipTypeSchema.remove('id');
DocumentRelationshipTypeSchema.add({
  value: String,
});

module.exports.DocumentRelationshipTypeSchema = DocumentRelationshipTypeSchema;
