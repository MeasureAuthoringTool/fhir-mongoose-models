const { ElementSchema } = require('./Element');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');

PrimitiveIntegerSchema.add(ElementSchema);
PrimitiveIntegerSchema.remove('id');
PrimitiveIntegerSchema.add({
  value: Number,
});

module.exports.PrimitiveIntegerSchema = PrimitiveIntegerSchema;
