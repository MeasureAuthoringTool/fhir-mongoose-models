const { ElementSchema } = require('./Element');
const { ListModeSchema } = require('./allSchemaHeaders.js');

ListModeSchema.add(ElementSchema);
ListModeSchema.remove('id');
ListModeSchema.add({
  value: String,
});

module.exports.ListModeSchema = ListModeSchema;
