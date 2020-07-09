const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AccountGuarantorSchema } = require('./allSchemaHeaders.js');

AccountGuarantorSchema.add(BackboneElementSchema);
AccountGuarantorSchema.remove('id');
AccountGuarantorSchema.add({
  party: ReferenceSchema,
  onHold: PrimitiveBooleanSchema,
  period: PeriodSchema,
});

module.exports.AccountGuarantorSchema = AccountGuarantorSchema;
