const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ImmunizationRecommendationRecommendationDateCriterionSchema } = require('./ImmunizationRecommendationRecommendationDateCriterion');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationRecommendationRecommendationSchema = BackboneElementSchemaFunction({
   vaccineCode : [CodeableConceptSchema],
   targetDisease : CodeableConceptSchema,
   contraindicatedVaccineCode : [CodeableConceptSchema],
   forecastStatus : CodeableConceptSchema,
   forecastReason : [CodeableConceptSchema],
   dateCriterion : [ImmunizationRecommendationRecommendationDateCriterionSchema],
   description : String,
   series : String,
   doseNumberPositiveInt : Number,
   doseNumberString : String,
   seriesDosesPositiveInt : Number,
   seriesDosesString : String,
   supportingImmunization : [ReferenceSchema],
   supportingPatientInformation : [ReferenceSchema],
   fhirTitle: { type: String, default: 'ImmunizationRecommendationRecommendation' },
});

class ImmunizationRecommendationRecommendation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationRecommendationRecommendationSchema);
    this._type = 'FHIR::ImmunizationRecommendationRecommendation';
  }
};


module.exports.ImmunizationRecommendationRecommendationSchema = ImmunizationRecommendationRecommendationSchema;
module.exports.ImmunizationRecommendationRecommendation = ImmunizationRecommendationRecommendation;
