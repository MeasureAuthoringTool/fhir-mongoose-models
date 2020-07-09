const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ExposureStateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisResultsByExposureSchema } = require('./allSchemaHeaders.js');

EffectEvidenceSynthesisResultsByExposureSchema.add(BackboneElementSchema);
EffectEvidenceSynthesisResultsByExposureSchema.remove('id');
EffectEvidenceSynthesisResultsByExposureSchema.add({
  description: PrimitiveStringSchema,
  exposureState: ExposureStateSchema,
  variantState: CodeableConceptSchema,
  riskEvidenceSynthesis: ReferenceSchema,
});

module.exports.EffectEvidenceSynthesisResultsByExposureSchema = EffectEvidenceSynthesisResultsByExposureSchema;
