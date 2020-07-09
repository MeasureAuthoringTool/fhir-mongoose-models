const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesCodeSystemVersionSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesCodeSystemSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesCodeSystemSchema.add(BackboneElementSchema);
TerminologyCapabilitiesCodeSystemSchema.remove('id');
TerminologyCapabilitiesCodeSystemSchema.add({
  uri: PrimitiveCanonicalSchema,
  version: [TerminologyCapabilitiesCodeSystemVersionSchema],
  subsumption: PrimitiveBooleanSchema,
});

module.exports.TerminologyCapabilitiesCodeSystemSchema = TerminologyCapabilitiesCodeSystemSchema;
