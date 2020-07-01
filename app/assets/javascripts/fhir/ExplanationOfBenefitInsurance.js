const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitInsuranceSchema = BackboneElementSchemaFunction({
  focal: PrimitiveBooleanSchema,
  coverage: ReferenceSchema,
  preAuthRef: [PrimitiveStringSchema],
  typeName: { type: String, default: 'ExplanationOfBenefitInsurance' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitInsurance' },
});

class ExplanationOfBenefitInsurance extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitInsuranceSchema);
    this.typeName = 'ExplanationOfBenefitInsurance';
    this._type = 'FHIR::ExplanationOfBenefitInsurance';
  }
}

module.exports.ExplanationOfBenefitInsuranceSchema = ExplanationOfBenefitInsuranceSchema;
module.exports.ExplanationOfBenefitInsurance = ExplanationOfBenefitInsurance;
