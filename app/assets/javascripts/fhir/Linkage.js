const { DomainResourceSchema } = require('./DomainResource');
const { LinkageItemSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { LinkageSchema } = require('./allSchemaHeaders.js');

LinkageSchema.add(DomainResourceSchema);
LinkageSchema.remove('id');
LinkageSchema.add({
  active: PrimitiveBooleanSchema,
  author: ReferenceSchema,
  item: [LinkageItemSchema],
});

module.exports.LinkageSchema = LinkageSchema;
