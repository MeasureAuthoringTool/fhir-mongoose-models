const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ImmunizationRecommendationRecommendationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImmunizationRecommendationSchema } = require('./allSchemaHeaders.js');

ImmunizationRecommendationSchema.add(DomainResourceSchema);
ImmunizationRecommendationSchema.remove('id');
ImmunizationRecommendationSchema.add({
  identifier: [IdentifierSchema],
  patient: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  authority: ReferenceSchema,
  recommendation: [ImmunizationRecommendationRecommendationSchema],
});

module.exports.ImmunizationRecommendationSchema = ImmunizationRecommendationSchema;
