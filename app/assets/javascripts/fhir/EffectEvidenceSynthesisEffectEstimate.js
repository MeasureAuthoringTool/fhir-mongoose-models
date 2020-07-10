const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDecimalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisEffectEstimateSchema } = require('./allSchemaHeaders.js');

EffectEvidenceSynthesisEffectEstimateSchema.add(BackboneElementSchema);
EffectEvidenceSynthesisEffectEstimateSchema.remove('id');
EffectEvidenceSynthesisEffectEstimateSchema.add({
  description: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  variantState: CodeableConceptSchema,
  value: PrimitiveDecimalSchema,
  unitOfMeasure: CodeableConceptSchema,
  precisionEstimate: [EffectEvidenceSynthesisEffectEstimatePrecisionEstimateSchema],
});

module.exports.EffectEvidenceSynthesisEffectEstimateSchema = EffectEvidenceSynthesisEffectEstimateSchema;
