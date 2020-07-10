const { BackboneElementSchema } = require('./BackboneElement');
const { DocumentRelationshipTypeSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CompositionRelatesToSchema } = require('./allSchemaHeaders.js');

CompositionRelatesToSchema.add(BackboneElementSchema);
CompositionRelatesToSchema.remove('id');
CompositionRelatesToSchema.add({
  code: DocumentRelationshipTypeSchema,
  targetIdentifier: IdentifierSchema,
  targetReference: ReferenceSchema,
});

module.exports.CompositionRelatesToSchema = CompositionRelatesToSchema;
