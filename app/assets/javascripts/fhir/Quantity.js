const { ElementSchema } = require('./Element');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { QuantityComparatorSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');

QuantitySchema.add(ElementSchema);
QuantitySchema.remove('id');
QuantitySchema.add({
  value: PrimitiveDecimalSchema,
  comparator: QuantityComparatorSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
});

module.exports.QuantitySchema = QuantitySchema;
