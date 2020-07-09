const { ElementSchema } = require('./Element');
const { PropertyTypeSchema } = require('./allSchemaHeaders.js');

PropertyTypeSchema.add(ElementSchema);
PropertyTypeSchema.remove('id');
PropertyTypeSchema.add({
  value: String,
});

module.exports.PropertyTypeSchema = PropertyTypeSchema;
