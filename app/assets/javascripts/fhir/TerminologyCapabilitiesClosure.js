const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesClosureSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesClosureSchema.add(BackboneElementSchema);
TerminologyCapabilitiesClosureSchema.remove('id');
TerminologyCapabilitiesClosureSchema.add({
  translation: PrimitiveBooleanSchema,
});

module.exports.TerminologyCapabilitiesClosureSchema = TerminologyCapabilitiesClosureSchema;
