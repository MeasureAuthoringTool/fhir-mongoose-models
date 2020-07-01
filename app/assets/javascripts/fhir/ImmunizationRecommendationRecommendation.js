const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ImmunizationRecommendationRecommendationDateCriterionSchema } = require('./ImmunizationRecommendationRecommendationDateCriterion');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ImmunizationRecommendationRecommendationSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'ImmunizationRecommendationRecommendation' },
  _type: { type: String, default: 'FHIR::ImmunizationRecommendationRecommendation' },
});

class ImmunizationRecommendationRecommendation extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationRecommendationRecommendationSchema);
    this.typeName = 'ImmunizationRecommendationRecommendation';
    this._type = 'FHIR::ImmunizationRecommendationRecommendation';
  }
}

module.exports.ImmunizationRecommendationRecommendationSchema = ImmunizationRecommendationRecommendationSchema;
module.exports.ImmunizationRecommendationRecommendation = ImmunizationRecommendationRecommendation;
