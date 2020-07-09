const { ElementSchema } = require('./Element');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');

PrimitiveStringSchema.add(ElementSchema);
PrimitiveStringSchema.remove('id');
PrimitiveStringSchema.add({
  value: String,
});

module.exports.PrimitiveStringSchema = PrimitiveStringSchema;
