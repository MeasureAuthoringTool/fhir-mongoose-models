const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PaymentReconciliationDetailSchema } = require('./PaymentReconciliationDetail');
const { PaymentReconciliationProcessNoteSchema } = require('./PaymentReconciliationProcessNote');
const { PaymentReconciliationStatusSchema } = require('./PaymentReconciliationStatus');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { RemittanceOutcomeSchema } = require('./RemittanceOutcome');

const PaymentReconciliationSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'PaymentReconciliation' },
  _type: { type: String, default: 'FHIR::PaymentReconciliation' },
});

class PaymentReconciliation extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationSchema);
    this.typeName = 'PaymentReconciliation';
    this._type = 'FHIR::PaymentReconciliation';
  }
}

module.exports.PaymentReconciliationSchema = PaymentReconciliationSchema;
module.exports.PaymentReconciliation = PaymentReconciliation;
