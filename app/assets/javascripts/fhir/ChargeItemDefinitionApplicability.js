const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ChargeItemDefinitionApplicabilitySchema } = require('./allSchemaHeaders.js');

ChargeItemDefinitionApplicabilitySchema.add(BackboneElementSchema);
ChargeItemDefinitionApplicabilitySchema.remove('id');
ChargeItemDefinitionApplicabilitySchema.add({
  description: PrimitiveStringSchema,
  language: PrimitiveStringSchema,
  expression: PrimitiveStringSchema,
});

module.exports.ChargeItemDefinitionApplicabilitySchema = ChargeItemDefinitionApplicabilitySchema;
