const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PaymentNoticeStatusSchema } = require('./PaymentNoticeStatus');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const PaymentNoticeSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'PaymentNotice' },
  _type: { type: String, default: 'FHIR::PaymentNotice' },
});

class PaymentNotice extends mongoose.Document {
  constructor(object) {
    super(object, PaymentNoticeSchema);
    this.typeName = 'PaymentNotice';
    this._type = 'FHIR::PaymentNotice';
  }
}

module.exports.PaymentNoticeSchema = PaymentNoticeSchema;
module.exports.PaymentNotice = PaymentNotice;
