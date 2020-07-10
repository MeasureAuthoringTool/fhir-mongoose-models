const { ElementSchema } = require('./Element');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');

PrimitiveUriSchema.add(ElementSchema);
PrimitiveUriSchema.remove('id');
PrimitiveUriSchema.add({
  value: String,
});

module.exports.PrimitiveUriSchema = PrimitiveUriSchema;
