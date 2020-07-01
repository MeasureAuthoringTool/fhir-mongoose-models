const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');

const ImmunizationRecommendationRecommendationDateCriterionSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  value: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'ImmunizationRecommendationRecommendationDateCriterion' },
  _type: { type: String, default: 'FHIR::ImmunizationRecommendationRecommendationDateCriterion' },
});

class ImmunizationRecommendationRecommendationDateCriterion extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationRecommendationRecommendationDateCriterionSchema);
    this.typeName = 'ImmunizationRecommendationRecommendationDateCriterion';
    this._type = 'FHIR::ImmunizationRecommendationRecommendationDateCriterion';
  }
}

module.exports.ImmunizationRecommendationRecommendationDateCriterionSchema = ImmunizationRecommendationRecommendationDateCriterionSchema;
module.exports.ImmunizationRecommendationRecommendationDateCriterion = ImmunizationRecommendationRecommendationDateCriterion;
