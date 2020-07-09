const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MoneySchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { PaymentReconciliationDetailSchema } = require('./allSchemaHeaders.js');

PaymentReconciliationDetailSchema.add(BackboneElementSchema);
PaymentReconciliationDetailSchema.remove('id');
PaymentReconciliationDetailSchema.add({
  identifier: IdentifierSchema,
  predecessor: IdentifierSchema,
  type: CodeableConceptSchema,
  request: ReferenceSchema,
  submitter: ReferenceSchema,
  response: ReferenceSchema,
  date: PrimitiveDateSchema,
  responsible: ReferenceSchema,
  payee: ReferenceSchema,
  amount: MoneySchema,
});

module.exports.PaymentReconciliationDetailSchema = PaymentReconciliationDetailSchema;
