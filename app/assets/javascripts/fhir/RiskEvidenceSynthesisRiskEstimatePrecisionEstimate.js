const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  level: PrimitiveDecimalSchema,
  from: PrimitiveDecimalSchema,
  to: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'RiskEvidenceSynthesisRiskEstimatePrecisionEstimate' },
  _type: { type: String, default: 'FHIR::RiskEvidenceSynthesisRiskEstimatePrecisionEstimate' },
});

class RiskEvidenceSynthesisRiskEstimatePrecisionEstimate extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema);
    this.typeName = 'RiskEvidenceSynthesisRiskEstimatePrecisionEstimate';
    this._type = 'FHIR::RiskEvidenceSynthesisRiskEstimatePrecisionEstimate';
  }
}

module.exports.RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema = RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema;
module.exports.RiskEvidenceSynthesisRiskEstimatePrecisionEstimate = RiskEvidenceSynthesisRiskEstimatePrecisionEstimate;
