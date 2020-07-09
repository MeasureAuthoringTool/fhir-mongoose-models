const { ElementSchema } = require('./Element');
const { CatalogEntryRelationTypeSchema } = require('./allSchemaHeaders.js');

CatalogEntryRelationTypeSchema.add(ElementSchema);
CatalogEntryRelationTypeSchema.remove('id');
CatalogEntryRelationTypeSchema.add({
  value: String,
});

module.exports.CatalogEntryRelationTypeSchema = CatalogEntryRelationTypeSchema;
