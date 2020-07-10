const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideManifestResourceSchema } = require('./allSchemaHeaders.js');

ImplementationGuideManifestResourceSchema.add(BackboneElementSchema);
ImplementationGuideManifestResourceSchema.remove('id');
ImplementationGuideManifestResourceSchema.add({
  reference: ReferenceSchema,
  exampleBoolean: PrimitiveBooleanSchema,
  exampleCanonical: PrimitiveCanonicalSchema,
  relativePath: PrimitiveUrlSchema,
});

module.exports.ImplementationGuideManifestResourceSchema = ImplementationGuideManifestResourceSchema;
