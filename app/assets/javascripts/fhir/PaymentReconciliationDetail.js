const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { ReferenceSchema } = require('./Reference');

const PaymentReconciliationDetailSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'PaymentReconciliationDetail' },
  _type: { type: String, default: 'FHIR::PaymentReconciliationDetail' },
});

class PaymentReconciliationDetail extends mongoose.Document {
  constructor(object) {
    super(object, PaymentReconciliationDetailSchema);
    this.typeName = 'PaymentReconciliationDetail';
    this._type = 'FHIR::PaymentReconciliationDetail';
  }
}

module.exports.PaymentReconciliationDetailSchema = PaymentReconciliationDetailSchema;
module.exports.PaymentReconciliationDetail = PaymentReconciliationDetail;
