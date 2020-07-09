const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUrlSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesImplementationSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesImplementationSchema.add(BackboneElementSchema);
TerminologyCapabilitiesImplementationSchema.remove('id');
TerminologyCapabilitiesImplementationSchema.add({
  description: PrimitiveStringSchema,
  url: PrimitiveUrlSchema,
});

module.exports.TerminologyCapabilitiesImplementationSchema = TerminologyCapabilitiesImplementationSchema;
