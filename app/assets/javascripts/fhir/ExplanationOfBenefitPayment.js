const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { MoneySchema } = require('./Money');
const { PrimitiveDateSchema } = require('./PrimitiveDate');

const ExplanationOfBenefitPaymentSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  adjustment: MoneySchema,
  adjustmentReason: CodeableConceptSchema,
  date: PrimitiveDateSchema,
  amount: MoneySchema,
  identifier: IdentifierSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitPayment' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitPayment' },
});

class ExplanationOfBenefitPayment extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitPaymentSchema);
    this.typeName = 'ExplanationOfBenefitPayment';
    this._type = 'FHIR::ExplanationOfBenefitPayment';
  }
}

module.exports.ExplanationOfBenefitPaymentSchema = ExplanationOfBenefitPaymentSchema;
module.exports.ExplanationOfBenefitPayment = ExplanationOfBenefitPayment;
