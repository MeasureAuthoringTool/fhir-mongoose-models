const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { InsurancePlanCoverageBenefitSchema } = require('./InsurancePlanCoverageBenefit');
const { ReferenceSchema } = require('./Reference');

const InsurancePlanCoverageSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  network: [ReferenceSchema],
  benefit: [InsurancePlanCoverageBenefitSchema],
  typeName: { type: String, default: 'InsurancePlanCoverage' },
  _type: { type: String, default: 'FHIR::InsurancePlanCoverage' },
});

class InsurancePlanCoverage extends mongoose.Document {
  constructor(object) {
    super(object, InsurancePlanCoverageSchema);
    this.typeName = 'InsurancePlanCoverage';
    this._type = 'FHIR::InsurancePlanCoverage';
  }
}

module.exports.InsurancePlanCoverageSchema = InsurancePlanCoverageSchema;
module.exports.InsurancePlanCoverage = InsurancePlanCoverage;
