const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DocumentManifestRelatedSchema } = require('./allSchemaHeaders.js');

DocumentManifestRelatedSchema.add(BackboneElementSchema);
DocumentManifestRelatedSchema.remove('id');
DocumentManifestRelatedSchema.add({
  identifier: IdentifierSchema,
  ref: ReferenceSchema,
});

module.exports.DocumentManifestRelatedSchema = DocumentManifestRelatedSchema;
