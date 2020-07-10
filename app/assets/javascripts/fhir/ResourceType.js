const { ElementSchema } = require('./Element');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');

ResourceTypeSchema.add(ElementSchema);
ResourceTypeSchema.remove('id');
ResourceTypeSchema.add({
  value: String,
});

module.exports.ResourceTypeSchema = ResourceTypeSchema;
