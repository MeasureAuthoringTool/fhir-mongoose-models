const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PaymentReconciliationDetailSchema } = require('./allSchemaHeaders.js');
const { PaymentReconciliationProcessNoteSchema } = require('./allSchemaHeaders.js');
const { PaymentReconciliationStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RemittanceOutcomeSchema } = require('./allSchemaHeaders.js');
const { PaymentReconciliationSchema } = require('./allSchemaHeaders.js');

PaymentReconciliationSchema.add(DomainResourceSchema);
PaymentReconciliationSchema.remove('id');
PaymentReconciliationSchema.add({
  identifier: [IdentifierSchema],
  status: PaymentReconciliationStatusSchema,
  period: PeriodSchema,
  created: PrimitiveDateTimeSchema,
  paymentIssuer: ReferenceSchema,
  request: ReferenceSchema,
  requestor: ReferenceSchema,
  outcome: RemittanceOutcomeSchema,
  disposition: PrimitiveStringSchema,
  paymentDate: PrimitiveDateSchema,
  paymentAmount: MoneySchema,
  paymentIdentifier: IdentifierSchema,
  detail: [PaymentReconciliationDetailSchema],
  formCode: CodeableConceptSchema,
  processNote: [PaymentReconciliationProcessNoteSchema],
});

module.exports.PaymentReconciliationSchema = PaymentReconciliationSchema;
