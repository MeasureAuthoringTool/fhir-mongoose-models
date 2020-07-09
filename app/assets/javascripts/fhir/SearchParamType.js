const { ElementSchema } = require('./Element');
const { SearchParamTypeSchema } = require('./allSchemaHeaders.js');

SearchParamTypeSchema.add(ElementSchema);
SearchParamTypeSchema.remove('id');
SearchParamTypeSchema.add({
  value: String,
});

module.exports.SearchParamTypeSchema = SearchParamTypeSchema;
