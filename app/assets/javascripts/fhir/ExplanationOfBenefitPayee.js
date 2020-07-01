const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitPayeeSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  party: ReferenceSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitPayee' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitPayee' },
});

class ExplanationOfBenefitPayee extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitPayeeSchema);
    this.typeName = 'ExplanationOfBenefitPayee';
    this._type = 'FHIR::ExplanationOfBenefitPayee';
  }
}

module.exports.ExplanationOfBenefitPayeeSchema = ExplanationOfBenefitPayeeSchema;
module.exports.ExplanationOfBenefitPayee = ExplanationOfBenefitPayee;
