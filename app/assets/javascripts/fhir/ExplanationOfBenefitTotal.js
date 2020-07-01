const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');

const ExplanationOfBenefitTotalSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  amount: MoneySchema,
  typeName: { type: String, default: 'ExplanationOfBenefitTotal' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitTotal' },
});

class ExplanationOfBenefitTotal extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitTotalSchema);
    this.typeName = 'ExplanationOfBenefitTotal';
    this._type = 'FHIR::ExplanationOfBenefitTotal';
  }
}

module.exports.ExplanationOfBenefitTotalSchema = ExplanationOfBenefitTotalSchema;
module.exports.ExplanationOfBenefitTotal = ExplanationOfBenefitTotal;
