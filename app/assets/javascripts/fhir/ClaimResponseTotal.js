const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { ClaimResponseTotalSchema } = require('./allSchemaHeaders.js');

ClaimResponseTotalSchema.add(BackboneElementSchema);
ClaimResponseTotalSchema.remove('id');
ClaimResponseTotalSchema.add({
  category: CodeableConceptSchema,
  amount: MoneySchema,
});

module.exports.ClaimResponseTotalSchema = ClaimResponseTotalSchema;
