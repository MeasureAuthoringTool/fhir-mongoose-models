const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ResourceSchema } = require('./allSchemaHeaders.js');
const { BundleEntryResponseSchema } = require('./allSchemaHeaders.js');

BundleEntryResponseSchema.add(BackboneElementSchema);
BundleEntryResponseSchema.remove('id');
BundleEntryResponseSchema.add({
  status: PrimitiveStringSchema,
  location: PrimitiveUriSchema,
  etag: PrimitiveStringSchema,
  lastModified: PrimitiveInstantSchema,
  outcome: ResourceSchema,
});

module.exports.BundleEntryResponseSchema = BundleEntryResponseSchema;
