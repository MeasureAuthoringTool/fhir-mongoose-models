const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema } = require('./allSchemaHeaders.js');

EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema.add(BackboneElementSchema);
EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema.remove('id');
EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema.add({
  type: CodeableConceptSchema,
  level: PrimitiveDecimalSchema,
  from: PrimitiveDecimalSchema,
  to: PrimitiveDecimalSchema,
});

module.exports.EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema = EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema;
