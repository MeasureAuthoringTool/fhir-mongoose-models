const { ElementSchema } = require('./Element');
const { FilterOperatorSchema } = require('./allSchemaHeaders.js');

FilterOperatorSchema.add(ElementSchema);
FilterOperatorSchema.remove('id');
FilterOperatorSchema.add({
  value: String,
});

module.exports.FilterOperatorSchema = FilterOperatorSchema;
