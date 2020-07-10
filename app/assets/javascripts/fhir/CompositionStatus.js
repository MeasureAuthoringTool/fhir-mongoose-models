const { ElementSchema } = require('./Element');
const { CompositionStatusSchema } = require('./allSchemaHeaders.js');

CompositionStatusSchema.add(ElementSchema);
CompositionStatusSchema.remove('id');
CompositionStatusSchema.add({
  value: String,
});

module.exports.CompositionStatusSchema = CompositionStatusSchema;
