const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisSampleSizeSchema } = require('./allSchemaHeaders.js');

EffectEvidenceSynthesisSampleSizeSchema.add(BackboneElementSchema);
EffectEvidenceSynthesisSampleSizeSchema.remove('id');
EffectEvidenceSynthesisSampleSizeSchema.add({
  description: PrimitiveStringSchema,
  numberOfStudies: PrimitiveIntegerSchema,
  numberOfParticipants: PrimitiveIntegerSchema,
});

module.exports.EffectEvidenceSynthesisSampleSizeSchema = EffectEvidenceSynthesisSampleSizeSchema;
