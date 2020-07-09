const { ElementSchema } = require('./Element');
const { ListStatusSchema } = require('./allSchemaHeaders.js');

ListStatusSchema.add(ElementSchema);
ListStatusSchema.remove('id');
ListStatusSchema.add({
  value: String,
});

module.exports.ListStatusSchema = ListStatusSchema;
