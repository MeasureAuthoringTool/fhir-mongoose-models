const { ElementSchema } = require('./Element');
const { SearchModifierCodeSchema } = require('./allSchemaHeaders.js');

SearchModifierCodeSchema.add(ElementSchema);
SearchModifierCodeSchema.remove('id');
SearchModifierCodeSchema.add({
  value: String,
});

module.exports.SearchModifierCodeSchema = SearchModifierCodeSchema;
