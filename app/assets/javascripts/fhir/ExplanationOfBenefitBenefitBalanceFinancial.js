const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');

const ExplanationOfBenefitBenefitBalanceFinancialSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  allowedUnsignedInt: PrimitiveUnsignedIntSchema,
  allowedString: PrimitiveStringSchema,
  allowedMoney: MoneySchema,
  usedUnsignedInt: PrimitiveUnsignedIntSchema,
  usedMoney: MoneySchema,
  typeName: { type: String, default: 'ExplanationOfBenefitBenefitBalanceFinancial' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitBenefitBalanceFinancial' },
});

class ExplanationOfBenefitBenefitBalanceFinancial extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitBenefitBalanceFinancialSchema);
    this.typeName = 'ExplanationOfBenefitBenefitBalanceFinancial';
    this._type = 'FHIR::ExplanationOfBenefitBenefitBalanceFinancial';
  }
}

module.exports.ExplanationOfBenefitBenefitBalanceFinancialSchema = ExplanationOfBenefitBenefitBalanceFinancialSchema;
module.exports.ExplanationOfBenefitBenefitBalanceFinancial = ExplanationOfBenefitBenefitBalanceFinancial;
