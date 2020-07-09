const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema } = require('./allSchemaHeaders.js');
const { EffectEvidenceSynthesisCertaintySchema } = require('./allSchemaHeaders.js');

EffectEvidenceSynthesisCertaintySchema.add(BackboneElementSchema);
EffectEvidenceSynthesisCertaintySchema.remove('id');
EffectEvidenceSynthesisCertaintySchema.add({
  rating: [CodeableConceptSchema],
  note: [AnnotationSchema],
  certaintySubcomponent: [EffectEvidenceSynthesisCertaintyCertaintySubcomponentSchema],
});

module.exports.EffectEvidenceSynthesisCertaintySchema = EffectEvidenceSynthesisCertaintySchema;
