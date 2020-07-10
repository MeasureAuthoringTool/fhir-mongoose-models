const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDependsOnSchema } = require('./allSchemaHeaders.js');

ImplementationGuideDependsOnSchema.add(BackboneElementSchema);
ImplementationGuideDependsOnSchema.remove('id');
ImplementationGuideDependsOnSchema.add({
  uri: PrimitiveCanonicalSchema,
  packageId: PrimitiveIdSchema,
  version: PrimitiveStringSchema,
});

module.exports.ImplementationGuideDependsOnSchema = ImplementationGuideDependsOnSchema;
