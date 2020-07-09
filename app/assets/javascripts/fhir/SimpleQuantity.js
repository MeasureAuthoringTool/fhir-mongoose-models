const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./Quantity');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');

SimpleQuantitySchema.add(QuantitySchema);
SimpleQuantitySchema.remove('id');
SimpleQuantitySchema.add({
  value: PrimitiveDecimalSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
});

module.exports.SimpleQuantitySchema = SimpleQuantitySchema;
