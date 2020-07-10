const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { BundleLinkSchema } = require('./allSchemaHeaders.js');

BundleLinkSchema.add(BackboneElementSchema);
BundleLinkSchema.remove('id');
BundleLinkSchema.add({
  relation: PrimitiveStringSchema,
  url: PrimitiveUriSchema,
});

module.exports.BundleLinkSchema = BundleLinkSchema;
