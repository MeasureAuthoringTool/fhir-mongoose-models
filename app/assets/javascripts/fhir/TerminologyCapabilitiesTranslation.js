const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesTranslationSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesTranslationSchema.add(BackboneElementSchema);
TerminologyCapabilitiesTranslationSchema.remove('id');
TerminologyCapabilitiesTranslationSchema.add({
  needsMap: PrimitiveBooleanSchema,
});

module.exports.TerminologyCapabilitiesTranslationSchema = TerminologyCapabilitiesTranslationSchema;
