const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesValidateCodeSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesValidateCodeSchema.add(BackboneElementSchema);
TerminologyCapabilitiesValidateCodeSchema.remove('id');
TerminologyCapabilitiesValidateCodeSchema.add({
  translations: PrimitiveBooleanSchema,
});

module.exports.TerminologyCapabilitiesValidateCodeSchema = TerminologyCapabilitiesValidateCodeSchema;
