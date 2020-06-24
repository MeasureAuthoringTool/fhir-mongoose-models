const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationRecommendationRecommendationDateCriterionSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   value : DateTime,
   fhirTitle: { type: String, default: 'ImmunizationRecommendationRecommendationDateCriterion' },
});

class ImmunizationRecommendationRecommendationDateCriterion extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationRecommendationRecommendationDateCriterionSchema);
    this._type = 'FHIR::ImmunizationRecommendationRecommendationDateCriterion';
  }
};


module.exports.ImmunizationRecommendationRecommendationDateCriterionSchema = ImmunizationRecommendationRecommendationDateCriterionSchema;
module.exports.ImmunizationRecommendationRecommendationDateCriterion = ImmunizationRecommendationRecommendationDateCriterion;
