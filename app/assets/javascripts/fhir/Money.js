const { CurrencyCodeSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');

MoneySchema.add(ElementSchema);
MoneySchema.remove('id');
MoneySchema.add({
  value: PrimitiveDecimalSchema,
  currency: CurrencyCodeSchema,
});

module.exports.MoneySchema = MoneySchema;
