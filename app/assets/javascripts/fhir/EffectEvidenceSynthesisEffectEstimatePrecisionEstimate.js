const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  level: PrimitiveDecimalSchema,
  from: PrimitiveDecimalSchema,
  to: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'EffectEvidenceSynthesisEffectEstimatePrecisionEstimate' },
  _type: { type: String, default: 'FHIR::EffectEvidenceSynthesisEffectEstimatePrecisionEstimate' },
});

class EffectEvidenceSynthesisEffectEstimatePrecisionEstimate extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema);
    this.typeName = 'EffectEvidenceSynthesisEffectEstimatePrecisionEstimate';
    this._type = 'FHIR::EffectEvidenceSynthesisEffectEstimatePrecisionEstimate';
  }
}

module.exports.EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema = EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema;
module.exports.EffectEvidenceSynthesisEffectEstimatePrecisionEstimate = EffectEvidenceSynthesisEffectEstimatePrecisionEstimate;
