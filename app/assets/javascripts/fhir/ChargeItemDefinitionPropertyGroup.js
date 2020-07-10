const { BackboneElementSchema } = require('./BackboneElement');
const { ChargeItemDefinitionApplicabilitySchema } = require('./allSchemaHeaders.js');
const { ChargeItemDefinitionPropertyGroupPriceComponentSchema } = require('./allSchemaHeaders.js');
const { ChargeItemDefinitionPropertyGroupSchema } = require('./allSchemaHeaders.js');

ChargeItemDefinitionPropertyGroupSchema.add(BackboneElementSchema);
ChargeItemDefinitionPropertyGroupSchema.remove('id');
ChargeItemDefinitionPropertyGroupSchema.add({
  applicability: [ChargeItemDefinitionApplicabilitySchema],
  priceComponent: [ChargeItemDefinitionPropertyGroupPriceComponentSchema],
});

module.exports.ChargeItemDefinitionPropertyGroupSchema = ChargeItemDefinitionPropertyGroupSchema;
