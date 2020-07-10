const { ElementSchema } = require('./Element');
const { SearchEntryModeSchema } = require('./allSchemaHeaders.js');

SearchEntryModeSchema.add(ElementSchema);
SearchEntryModeSchema.remove('id');
SearchEntryModeSchema.add({
  value: String,
});

module.exports.SearchEntryModeSchema = SearchEntryModeSchema;
