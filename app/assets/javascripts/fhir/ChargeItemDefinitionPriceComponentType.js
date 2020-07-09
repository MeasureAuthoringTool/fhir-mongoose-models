const { ElementSchema } = require('./Element');
const { ChargeItemDefinitionPriceComponentTypeSchema } = require('./allSchemaHeaders.js');

ChargeItemDefinitionPriceComponentTypeSchema.add(ElementSchema);
ChargeItemDefinitionPriceComponentTypeSchema.remove('id');
ChargeItemDefinitionPriceComponentTypeSchema.add({
  value: String,
});

module.exports.ChargeItemDefinitionPriceComponentTypeSchema = ChargeItemDefinitionPriceComponentTypeSchema;
