const { BackboneElementSchema } = require('./BackboneElement');
const { CatalogEntryRelationTypeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CatalogEntryRelatedEntrySchema } = require('./allSchemaHeaders.js');

CatalogEntryRelatedEntrySchema.add(BackboneElementSchema);
CatalogEntryRelatedEntrySchema.remove('id');
CatalogEntryRelatedEntrySchema.add({
  relationtype: CatalogEntryRelationTypeSchema,
  item: ReferenceSchema,
});

module.exports.CatalogEntryRelatedEntrySchema = CatalogEntryRelatedEntrySchema;
