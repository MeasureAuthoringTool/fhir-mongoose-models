const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./allSchemaHeaders.js');

EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema.add(BackboneElementSchema);
EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema.remove('id');
EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema.add({
  type: CodeableConceptSchema,
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
});

module.exports.EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema = EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema;
