const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesExpansionParameterSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesExpansionParameterSchema.add(BackboneElementSchema);
TerminologyCapabilitiesExpansionParameterSchema.remove('id');
TerminologyCapabilitiesExpansionParameterSchema.add({
  name: PrimitiveCodeSchema,
  documentation: PrimitiveStringSchema,
});

module.exports.TerminologyCapabilitiesExpansionParameterSchema = TerminologyCapabilitiesExpansionParameterSchema;
