const { BackboneElementSchema } = require('./BackboneElement');
const { HTTPVerbSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { BundleEntryRequestSchema } = require('./allSchemaHeaders.js');

BundleEntryRequestSchema.add(BackboneElementSchema);
BundleEntryRequestSchema.remove('id');
BundleEntryRequestSchema.add({
  method: HTTPVerbSchema,
  url: PrimitiveUriSchema,
  ifNoneMatch: PrimitiveStringSchema,
  ifModifiedSince: PrimitiveInstantSchema,
  ifMatch: PrimitiveStringSchema,
  ifNoneExist: PrimitiveStringSchema,
});

module.exports.BundleEntryRequestSchema = BundleEntryRequestSchema;
