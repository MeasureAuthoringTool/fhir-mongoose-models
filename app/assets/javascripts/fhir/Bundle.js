const { BundleEntrySchema } = require('./allSchemaHeaders.js');
const { BundleLinkSchema } = require('./allSchemaHeaders.js');
const { BundleTypeSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ResourceSchema } = require('./Resource');
const { SignatureSchema } = require('./allSchemaHeaders.js');
const { BundleSchema } = require('./allSchemaHeaders.js');

BundleSchema.add(ResourceSchema);
BundleSchema.remove('id');
BundleSchema.add({
  identifier: IdentifierSchema,
  type: BundleTypeSchema,
  timestamp: PrimitiveInstantSchema,
  total: PrimitiveUnsignedIntSchema,
  link: [BundleLinkSchema],
  entry: [BundleEntrySchema],
  signature: SignatureSchema,
});

module.exports.BundleSchema = BundleSchema;
