const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RiskAssessmentPredictionSchema = BackboneElementSchemaFunction({
   outcome : CodeableConceptSchema,
   probabilityDecimal : Number,
   probabilityRange : RangeSchema,
   qualitativeRisk : CodeableConceptSchema,
   relativeRisk : Number,
   whenPeriod : PeriodSchema,
   whenRange : RangeSchema,
   rationale : String,
   fhirTitle: { type: String, default: 'RiskAssessmentPrediction' },
});

class RiskAssessmentPrediction extends mongoose.Document {
  constructor(object) {
    super(object, RiskAssessmentPredictionSchema);
    this._type = 'FHIR::RiskAssessmentPrediction';
  }
};


module.exports.RiskAssessmentPredictionSchema = RiskAssessmentPredictionSchema;
module.exports.RiskAssessmentPrediction = RiskAssessmentPrediction;
