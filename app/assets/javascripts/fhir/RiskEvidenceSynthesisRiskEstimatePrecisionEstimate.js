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

const RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   level : Number,
   from : Number,
   to : Number,
   fhirTitle: { type: String, default: 'RiskEvidenceSynthesisRiskEstimatePrecisionEstimate' },
});

class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema);
    this._type = 'FHIR::RiskEvidenceSynthesisRiskEstimatePrecisionEstimate';
  }
};


module.exports.RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema = RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema;
module.exports.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate = RiskEvidenceSynthesisRiskEstimatePrecisionEstimate;
