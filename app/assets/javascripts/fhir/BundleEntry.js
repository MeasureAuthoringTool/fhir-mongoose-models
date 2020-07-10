const { BackboneElementSchema } = require('./BackboneElement');
const { BundleEntryRequestSchema } = require('./allSchemaHeaders.js');
const { BundleEntryResponseSchema } = require('./allSchemaHeaders.js');
const { BundleEntrySearchSchema } = require('./allSchemaHeaders.js');
const { BundleLinkSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ResourceSchema } = require('./allSchemaHeaders.js');
const { BundleEntrySchema } = require('./allSchemaHeaders.js');

BundleEntrySchema.add(BackboneElementSchema);
BundleEntrySchema.remove('id');
BundleEntrySchema.add({
  link: [BundleLinkSchema],
  fullUrl: PrimitiveUriSchema,
  resource: ResourceSchema,
  search: BundleEntrySearchSchema,
  request: BundleEntryRequestSchema,
  response: BundleEntryResponseSchema,
});

module.exports.BundleEntrySchema = BundleEntrySchema;
