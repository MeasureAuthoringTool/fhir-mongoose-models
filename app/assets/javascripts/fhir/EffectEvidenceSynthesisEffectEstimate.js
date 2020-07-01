const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema } = require('./EffectEvidenceSynthesisEffectEstimatePrecisionEstimate');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const EffectEvidenceSynthesisEffectEstimateSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  variantState: CodeableConceptSchema,
  value: PrimitiveDecimalSchema,
  unitOfMeasure: CodeableConceptSchema,
  precisionEstimate: [EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema],
  typeName: { type: String, default: 'EffectEvidenceSynthesisEffectEstimate' },
  _type: { type: String, default: 'FHIR::EffectEvidenceSynthesisEffectEstimate' },
});

class EffectEvidenceSynthesisEffectEstimate extends mongoose.Document {
  constructor(object) {
    super(object, EffectEvidenceSynthesisEffectEstimateSchema);
    this.typeName = 'EffectEvidenceSynthesisEffectEstimate';
    this._type = 'FHIR::EffectEvidenceSynthesisEffectEstimate';
  }
}

module.exports.EffectEvidenceSynthesisEffectEstimateSchema = EffectEvidenceSynthesisEffectEstimateSchema;
module.exports.EffectEvidenceSynthesisEffectEstimate = EffectEvidenceSynthesisEffectEstimate;
