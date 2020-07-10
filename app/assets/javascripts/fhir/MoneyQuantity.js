const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./Quantity');
const { QuantityComparatorSchema } = require('./allSchemaHeaders.js');
const { MoneyQuantitySchema } = require('./allSchemaHeaders.js');

MoneyQuantitySchema.add(QuantitySchema);
MoneyQuantitySchema.remove('id');
MoneyQuantitySchema.add({
  value: PrimitiveDecimalSchema,
  comparator: QuantityComparatorSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
});

module.exports.MoneyQuantitySchema = MoneyQuantitySchema;
