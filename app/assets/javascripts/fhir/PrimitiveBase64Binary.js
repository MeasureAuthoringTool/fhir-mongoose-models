const { ElementSchema } = require('./Element');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');

PrimitiveBase64BinarySchema.add(ElementSchema);
PrimitiveBase64BinarySchema.remove('id');
PrimitiveBase64BinarySchema.add({
  value: String,
});

module.exports.PrimitiveBase64BinarySchema = PrimitiveBase64BinarySchema;
