const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');

const RiskAssessmentPredictionSchema = BackboneElementSchemaFunction({
  outcome: CodeableConceptSchema,
  probabilityDecimal: PrimitiveDecimalSchema,
  probabilityRange: RangeSchema,
  qualitativeRisk: CodeableConceptSchema,
  relativeRisk: PrimitiveDecimalSchema,
  whenPeriod: PeriodSchema,
  whenRange: RangeSchema,
  rationale: PrimitiveStringSchema,
  typeName: { type: String, default: 'RiskAssessmentPrediction' },
  _type: { type: String, default: 'FHIR::RiskAssessmentPrediction' },
});

class RiskAssessmentPrediction extends mongoose.Document {
  constructor(object) {
    super(object, RiskAssessmentPredictionSchema);
    this.typeName = 'RiskAssessmentPrediction';
    this._type = 'FHIR::RiskAssessmentPrediction';
  }
}

module.exports.RiskAssessmentPredictionSchema = RiskAssessmentPredictionSchema;
module.exports.RiskAssessmentPrediction = RiskAssessmentPrediction;
