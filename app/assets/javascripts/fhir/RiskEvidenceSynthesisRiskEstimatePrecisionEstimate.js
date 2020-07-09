const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema } = require('./allSchemaHeaders.js');

RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema.add(BackboneElementSchema);
RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema.remove('id');
RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema.add({
  type: CodeableConceptSchema,
  level: PrimitiveDecimalSchema,
  from: PrimitiveDecimalSchema,
  to: PrimitiveDecimalSchema,
});

module.exports.RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema = RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema;
