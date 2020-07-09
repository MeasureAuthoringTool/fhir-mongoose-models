const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PaymentNoticeStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PaymentNoticeSchema } = require('./allSchemaHeaders.js');

PaymentNoticeSchema.add(DomainResourceSchema);
PaymentNoticeSchema.remove('id');
PaymentNoticeSchema.add({
  identifier: [IdentifierSchema],
  status: PaymentNoticeStatusSchema,
  request: ReferenceSchema,
  response: ReferenceSchema,
  created: PrimitiveDateTimeSchema,
  provider: ReferenceSchema,
  payment: ReferenceSchema,
  paymentDate: PrimitiveDateSchema,
  payee: ReferenceSchema,
  recipient: ReferenceSchema,
  amount: MoneySchema,
  paymentStatus: CodeableConceptSchema,
});

module.exports.PaymentNoticeSchema = PaymentNoticeSchema;
