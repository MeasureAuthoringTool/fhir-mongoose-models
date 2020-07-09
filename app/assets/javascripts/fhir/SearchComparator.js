const { ElementSchema } = require('./Element');
const { SearchComparatorSchema } = require('./allSchemaHeaders.js');

SearchComparatorSchema.add(ElementSchema);
SearchComparatorSchema.remove('id');
SearchComparatorSchema.add({
  value: String,
});

module.exports.SearchComparatorSchema = SearchComparatorSchema;
