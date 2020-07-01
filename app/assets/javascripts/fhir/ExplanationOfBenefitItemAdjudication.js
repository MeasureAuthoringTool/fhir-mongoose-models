const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const ExplanationOfBenefitItemAdjudicationSchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  reason: CodeableConceptSchema,
  amount: MoneySchema,
  value: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitItemAdjudication' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitItemAdjudication' },
});

class ExplanationOfBenefitItemAdjudication extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitItemAdjudicationSchema);
    this.typeName = 'ExplanationOfBenefitItemAdjudication';
    this._type = 'FHIR::ExplanationOfBenefitItemAdjudication';
  }
}

module.exports.ExplanationOfBenefitItemAdjudicationSchema = ExplanationOfBenefitItemAdjudicationSchema;
module.exports.ExplanationOfBenefitItemAdjudication = ExplanationOfBenefitItemAdjudication;
