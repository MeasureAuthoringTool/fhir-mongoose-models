const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesCodeSystemVersionFilterSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesCodeSystemVersionFilterSchema.add(BackboneElementSchema);
TerminologyCapabilitiesCodeSystemVersionFilterSchema.remove('id');
TerminologyCapabilitiesCodeSystemVersionFilterSchema.add({
  code: PrimitiveCodeSchema,
  op: [PrimitiveCodeSchema],
});

module.exports.TerminologyCapabilitiesCodeSystemVersionFilterSchema = TerminologyCapabilitiesCodeSystemVersionFilterSchema;
