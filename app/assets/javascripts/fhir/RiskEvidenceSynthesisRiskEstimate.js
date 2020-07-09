const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema } = require('./allSchemaHeaders.js');
const { RiskEvidenceSynthesisRiskEstimateSchema } = require('./allSchemaHeaders.js');

RiskEvidenceSynthesisRiskEstimateSchema.add(BackboneElementSchema);
RiskEvidenceSynthesisRiskEstimateSchema.remove('id');
RiskEvidenceSynthesisRiskEstimateSchema.add({
  description: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  value: PrimitiveDecimalSchema,
  unitOfMeasure: CodeableConceptSchema,
  denominatorCount: PrimitiveIntegerSchema,
  numeratorCount: PrimitiveIntegerSchema,
  precisionEstimate: [RiskEvidenceSynthesisRiskEstimatePrecisionEstimateSchema],
});

module.exports.RiskEvidenceSynthesisRiskEstimateSchema = RiskEvidenceSynthesisRiskEstimateSchema;
