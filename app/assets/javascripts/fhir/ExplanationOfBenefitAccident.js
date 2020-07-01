const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { ReferenceSchema } = require('./Reference');

const ExplanationOfBenefitAccidentSchema = BackboneElementSchemaFunction({
  date: PrimitiveDateSchema,
  type: CodeableConceptSchema,
  locationAddress: AddressSchema,
  locationReference: ReferenceSchema,
  typeName: { type: String, default: 'ExplanationOfBenefitAccident' },
  _type: { type: String, default: 'FHIR::ExplanationOfBenefitAccident' },
});

class ExplanationOfBenefitAccident extends mongoose.Document {
  constructor(object) {
    super(object, ExplanationOfBenefitAccidentSchema);
    this.typeName = 'ExplanationOfBenefitAccident';
    this._type = 'FHIR::ExplanationOfBenefitAccident';
  }
}

module.exports.ExplanationOfBenefitAccidentSchema = ExplanationOfBenefitAccidentSchema;
module.exports.ExplanationOfBenefitAccident = ExplanationOfBenefitAccident;
