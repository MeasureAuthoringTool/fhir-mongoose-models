const { BackboneElementSchema } = require('./BackboneElement');
const { ChargeItemDefinitionPriceComponentTypeSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { ChargeItemDefinitionPropertyGroupPriceComponentSchema } = require('./allSchemaHeaders.js');

ChargeItemDefinitionPropertyGroupPriceComponentSchema.add(BackboneElementSchema);
ChargeItemDefinitionPropertyGroupPriceComponentSchema.remove('id');
ChargeItemDefinitionPropertyGroupPriceComponentSchema.add({
  type: ChargeItemDefinitionPriceComponentTypeSchema,
  code: CodeableConceptSchema,
  factor: PrimitiveDecimalSchema,
  amount: MoneySchema,
});

module.exports.ChargeItemDefinitionPropertyGroupPriceComponentSchema = ChargeItemDefinitionPropertyGroupPriceComponentSchema;
