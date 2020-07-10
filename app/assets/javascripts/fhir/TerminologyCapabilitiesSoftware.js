const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesSoftwareSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesSoftwareSchema.add(BackboneElementSchema);
TerminologyCapabilitiesSoftwareSchema.remove('id');
TerminologyCapabilitiesSoftwareSchema.add({
  name: PrimitiveStringSchema,
  version: PrimitiveStringSchema,
});

module.exports.TerminologyCapabilitiesSoftwareSchema = TerminologyCapabilitiesSoftwareSchema;
