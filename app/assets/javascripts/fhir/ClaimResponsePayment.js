const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PrimitiveDateSchema } = require('./PrimitiveDate');

const ClaimResponsePaymentSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  adjustment: MoneySchema,
  adjustmentReason: CodeableConceptSchema,
  date: PrimitiveDateSchema,
  amount: MoneySchema,
  identifier: IdentifierSchema,
  typeName: { type: String, default: 'ClaimResponsePayment' },
  _type: { type: String, default: 'FHIR::ClaimResponsePayment' },
});

class ClaimResponsePayment extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponsePaymentSchema);
    this.typeName = 'ClaimResponsePayment';
    this._type = 'FHIR::ClaimResponsePayment';
  }
}

module.exports.ClaimResponsePaymentSchema = ClaimResponsePaymentSchema;
module.exports.ClaimResponsePayment = ClaimResponsePayment;
