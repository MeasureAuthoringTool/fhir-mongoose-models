const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const CoverageEligibilityResponseErrorSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  typeName: { type: String, default: 'CoverageEligibilityResponseError' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityResponseError' },
});

class CoverageEligibilityResponseError extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseErrorSchema);
    this.typeName = 'CoverageEligibilityResponseError';
    this._type = 'FHIR::CoverageEligibilityResponseError';
  }
}

module.exports.CoverageEligibilityResponseErrorSchema = CoverageEligibilityResponseErrorSchema;
module.exports.CoverageEligibilityResponseError = CoverageEligibilityResponseError;
