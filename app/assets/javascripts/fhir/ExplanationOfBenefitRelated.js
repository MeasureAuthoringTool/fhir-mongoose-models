const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitRelatedSchema = BackboneElementSchemaFunction({
  claim: ReferenceSchema,
  relationship: CodeableConceptSchema,
  reference: IdentifierSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitRelated' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitRelated' },
});

class ExplanationOfBenefitRelated extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitRelatedSchema);
    this.typeName = 'ExplanationOfBenefitRelated';
    this._type = 'FHIR::ExplanationOfBenefitRelated';
  }
}

module.exports.ExplanationOfBenefitRelatedSchema = ExplanationOfBenefitRelatedSchema;
module.exports.ExplanationOfBenefitRelated = ExplanationOfBenefitRelated;
