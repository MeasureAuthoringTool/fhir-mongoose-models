const { ElementSchema } = require('./Element');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');

PrimitiveDecimalSchema.add(ElementSchema);
PrimitiveDecimalSchema.remove('id');
PrimitiveDecimalSchema.add({
  value: Number,
});

module.exports.PrimitiveDecimalSchema = PrimitiveDecimalSchema;
