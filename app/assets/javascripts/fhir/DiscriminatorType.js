const { ElementSchema } = require('./Element');
const { DiscriminatorTypeSchema } = require('./allSchemaHeaders.js');

DiscriminatorTypeSchema.add(ElementSchema);
DiscriminatorTypeSchema.remove('id');
DiscriminatorTypeSchema.add({
  value: String,
});

module.exports.DiscriminatorTypeSchema = DiscriminatorTypeSchema;
