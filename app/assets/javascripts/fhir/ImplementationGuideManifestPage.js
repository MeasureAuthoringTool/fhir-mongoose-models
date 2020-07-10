const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideManifestPageSchema } = require('./allSchemaHeaders.js');

ImplementationGuideManifestPageSchema.add(BackboneElementSchema);
ImplementationGuideManifestPageSchema.remove('id');
ImplementationGuideManifestPageSchema.add({
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  anchor: [PrimitiveStringSchema],
});

module.exports.ImplementationGuideManifestPageSchema = ImplementationGuideManifestPageSchema;
