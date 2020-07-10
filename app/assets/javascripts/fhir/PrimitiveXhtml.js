const { ElementSchema } = require('./Element');
const { PrimitiveXhtmlSchema } = require('./allSchemaHeaders.js');

PrimitiveXhtmlSchema.add(ElementSchema);
PrimitiveXhtmlSchema.remove('id');
PrimitiveXhtmlSchema.add({
  value: String,
});

module.exports.PrimitiveXhtmlSchema = PrimitiveXhtmlSchema;
