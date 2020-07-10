const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ImmunizationRecommendationRecommendationDateCriterionSchema } = require('./allSchemaHeaders.js');

ImmunizationRecommendationRecommendationDateCriterionSchema.add(BackboneElementSchema);
ImmunizationRecommendationRecommendationDateCriterionSchema.remove('id');
ImmunizationRecommendationRecommendationDateCriterionSchema.add({
  code: CodeableConceptSchema,
  value: PrimitiveDateTimeSchema,
});

module.exports.ImmunizationRecommendationRecommendationDateCriterionSchema = ImmunizationRecommendationRecommendationDateCriterionSchema;
