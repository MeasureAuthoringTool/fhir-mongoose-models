const { ElementSchema } = require('./Element');
const { TypeRestfulInteractionSchema } = require('./allSchemaHeaders.js');

TypeRestfulInteractionSchema.add(ElementSchema);
TypeRestfulInteractionSchema.remove('id');
TypeRestfulInteractionSchema.add({
  value: String,
});

module.exports.TypeRestfulInteractionSchema = TypeRestfulInteractionSchema;
