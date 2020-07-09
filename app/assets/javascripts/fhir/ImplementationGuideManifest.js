const { BackboneElementSchema } = require('./BackboneElement');
const { ImplementationGuideManifestPageSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideManifestResourceSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideManifestSchema } = require('./allSchemaHeaders.js');

ImplementationGuideManifestSchema.add(BackboneElementSchema);
ImplementationGuideManifestSchema.remove('id');
ImplementationGuideManifestSchema.add({
  rendering: PrimitiveUrlSchema,
  resource: [ImplementationGuideManifestResourceSchema],
  page: [ImplementationGuideManifestPageSchema],
  image: [PrimitiveStringSchema],
  other: [PrimitiveStringSchema],
});

module.exports.ImplementationGuideManifestSchema = ImplementationGuideManifestSchema;
