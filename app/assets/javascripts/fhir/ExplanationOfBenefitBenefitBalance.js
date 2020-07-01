const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExplanationOfBenefitBenefitBalanceFinancialSchema } = require('./ExplanationOfBenefitBenefitBalanceFinancial');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ExplanationOfBenefitBenefitBalanceSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  excluded: PrimitiveBooleanSchema,
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  network: CodeableConceptSchema,
  unit: CodeableConceptSchema,
  term: CodeableConceptSchema,
  financial: [ExplanationOfBenefitBenefitBalanceFinancialSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitBenefitBalance' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitBenefitBalance' },
});

class ExplanationOfBenefitBenefitBalance extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitBenefitBalanceSchema);
    this.typeName = 'ExplanationOfBenefitBenefitBalance';
    this._type = 'FHIR::ExplanationOfBenefitBenefitBalance';
  }
}

module.exports.ExplanationOfBenefitBenefitBalanceSchema = ExplanationOfBenefitBenefitBalanceSchema;
module.exports.ExplanationOfBenefitBenefitBalance = ExplanationOfBenefitBenefitBalance;
