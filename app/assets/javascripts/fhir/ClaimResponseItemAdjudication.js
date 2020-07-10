const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseItemAdjudicationSchema } = require('./allSchemaHeaders.js');

ClaimResponseItemAdjudicationSchema.add(BackboneElementSchema);
ClaimResponseItemAdjudicationSchema.remove('id');
ClaimResponseItemAdjudicationSchema.add({
  category: CodeableConceptSchema,
  reason: CodeableConceptSchema,
  amount: MoneySchema,
  value: PrimitiveDecimalSchema,
});

module.exports.ClaimResponseItemAdjudicationSchema = ClaimResponseItemAdjudicationSchema;
