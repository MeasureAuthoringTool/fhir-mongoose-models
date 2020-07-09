const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { RiskAssessmentPredictionSchema } = require('./allSchemaHeaders.js');

RiskAssessmentPredictionSchema.add(BackboneElementSchema);
RiskAssessmentPredictionSchema.remove('id');
RiskAssessmentPredictionSchema.add({
  outcome: CodeableConceptSchema,
  probabilityDecimal: PrimitiveDecimalSchema,
  probabilityRange: RangeSchema,
  qualitativeRisk: CodeableConceptSchema,
  relativeRisk: PrimitiveDecimalSchema,
  whenPeriod: PeriodSchema,
  whenRange: RangeSchema,
  rationale: PrimitiveStringSchema,
});

module.exports.RiskAssessmentPredictionSchema = RiskAssessmentPredictionSchema;
