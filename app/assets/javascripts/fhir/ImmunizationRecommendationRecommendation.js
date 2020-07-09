const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ImmunizationRecommendationRecommendationDateCriterionSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImmunizationRecommendationRecommendationSchema } = require('./allSchemaHeaders.js');

ImmunizationRecommendationRecommendationSchema.add(BackboneElementSchema);
ImmunizationRecommendationRecommendationSchema.remove('id');
ImmunizationRecommendationRecommendationSchema.add({
  vaccineCode: [CodeableConceptSchema],
  targetDisease: CodeableConceptSchema,
  contraindicatedVaccineCode: [CodeableConceptSchema],
  forecastStatus: CodeableConceptSchema,
  forecastReason: [CodeableConceptSchema],
  dateCriterion: [ImmunizationRecommendationRecommendationDateCriterionSchema],
  description: PrimitiveStringSchema,
  series: PrimitiveStringSchema,
  doseNumberPositiveInt: PrimitivePositiveIntSchema,
  doseNumberString: PrimitiveStringSchema,
  seriesDosesPositiveInt: PrimitivePositiveIntSchema,
  seriesDosesString: PrimitiveStringSchema,
  supportingImmunization: [ReferenceSchema],
  supportingPatientInformation: [ReferenceSchema],
});

module.exports.ImmunizationRecommendationRecommendationSchema = ImmunizationRecommendationRecommendationSchema;
