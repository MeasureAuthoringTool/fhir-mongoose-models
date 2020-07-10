const { BackboneElementSchema } = require('./BackboneElement');
const { DocumentRelationshipTypeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceRelatesToSchema } = require('./allSchemaHeaders.js');

DocumentReferenceRelatesToSchema.add(BackboneElementSchema);
DocumentReferenceRelatesToSchema.remove('id');
DocumentReferenceRelatesToSchema.add({
  code: DocumentRelationshipTypeSchema,
  target: ReferenceSchema,
});

module.exports.DocumentReferenceRelatesToSchema = DocumentReferenceRelatesToSchema;
