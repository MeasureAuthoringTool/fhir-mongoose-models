const { BackboneElementSchema } = require('./BackboneElement');
const { LinkageTypeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { LinkageItemSchema } = require('./allSchemaHeaders.js');

LinkageItemSchema.add(BackboneElementSchema);
LinkageItemSchema.remove('id');
LinkageItemSchema.add({
  type: LinkageTypeSchema,
  resource: ReferenceSchema,
});

module.exports.LinkageItemSchema = LinkageItemSchema;
