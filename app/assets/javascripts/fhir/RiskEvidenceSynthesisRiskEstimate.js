const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema } = require('./RiskEvidenceSynthesisRiskEstimatePrecisionEstimate');

const RiskEvidenceSynthesisRiskEstimateSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  value: PrimitiveDecimalSchema,
  unitOfMeasure: CodeableConceptSchema,
  denominatorCount: PrimitiveIntegerSchema,
  numeratorCount: PrimitiveIntegerSchema,
  precisionEstimate: [RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema],
  typeName: { type: String, default: 'RiskEvidenceSynthesisRiskEstimate' },
  _type: { type: String, default: 'FHIR::RiskEvidenceSynthesisRiskEstimate' },
});

class RiskEvidenceSynthesisRiskEstimate extends mongoose.Document {
  constructor(object) {
    super(object, RiskEvidenceSynthesisRiskEstimateSchema);
    this.typeName = 'RiskEvidenceSynthesisRiskEstimate';
    this._type = 'FHIR::RiskEvidenceSynthesisRiskEstimate';
  }
}

module.exports.RiskEvidenceSynthesisRiskEstimateSchema = RiskEvidenceSynthesisRiskEstimateSchema;
module.exports.RiskEvidenceSynthesisRiskEstimate = RiskEvidenceSynthesisRiskEstimate;
