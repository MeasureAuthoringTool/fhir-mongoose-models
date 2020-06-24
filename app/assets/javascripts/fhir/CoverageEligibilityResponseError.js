const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityResponseErrorSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'CoverageEligibilityResponseError' },
});

class CoverageEligibilityResponseError extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityResponseErrorSchema);
    this._type = 'FHIR::CoverageEligibilityResponseError';
  }
};


module.exports.CoverageEligibilityResponseErrorSchema = CoverageEligibilityResponseErrorSchema;
module.exports.CoverageEligibilityResponseError = CoverageEligibilityResponseError;
