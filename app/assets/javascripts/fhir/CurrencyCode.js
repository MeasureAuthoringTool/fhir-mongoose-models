const { ElementSchema } = require('./Element');
const { CurrencyCodeSchema } = require('./allSchemaHeaders.js');

CurrencyCodeSchema.add(ElementSchema);
CurrencyCodeSchema.remove('id');
CurrencyCodeSchema.add({
  value: String,
});

module.exports.CurrencyCodeSchema = CurrencyCodeSchema;
