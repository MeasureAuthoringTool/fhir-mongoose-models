const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema } = require('./RiskEvidenceSynthesisRiskEstimatePrecisionEstimate');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskEvidenceSynthesisRiskEstimateSchema = BackboneElementSchemaFunction({
   description : String,
   type : CodeableConceptSchema,
   value : Number,
   unitOfMeasure : CodeableConceptSchema,
   denominatorCount : Number,
   numeratorCount : Number,
   precisionEstimate : [RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema],
   fhirTitle: { type: String, default: 'RiskEvidenceSynthesisRiskEstimate' },
});

class RiskEvidenceSynthesisRiskEstimate extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisRiskEstimateSchema);
    this._type = 'FHIR::RiskEvidenceSynthesisRiskEstimate';
  }
};


module.exports.RiskEvidenceSynthesisRiskEstimateSchema = RiskEvidenceSynthesisRiskEstimateSchema;
module.exports.RiskEvidenceSynthesisRiskEstimate = RiskEvidenceSynthesisRiskEstimate;
