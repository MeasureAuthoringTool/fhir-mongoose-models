const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ClaimResponsePaymentSchema } = require('./allSchemaHeaders.js');

ClaimResponsePaymentSchema.add(BackboneElementSchema);
ClaimResponsePaymentSchema.remove('id');
ClaimResponsePaymentSchema.add({
  type: CodeableConceptSchema,
  adjustment: MoneySchema,
  adjustmentReason: CodeableConceptSchema,
  date: PrimitiveDateSchema,
  amount: MoneySchema,
  identifier: IdentifierSchema,
});

module.exports.ClaimResponsePaymentSchema = ClaimResponsePaymentSchema;
