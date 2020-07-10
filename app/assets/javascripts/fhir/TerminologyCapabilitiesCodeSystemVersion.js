const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesCodeSystemVersionFilterSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesCodeSystemVersionSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesCodeSystemVersionSchema.add(BackboneElementSchema);
TerminologyCapabilitiesCodeSystemVersionSchema.remove('id');
TerminologyCapabilitiesCodeSystemVersionSchema.add({
  code: PrimitiveStringSchema,
  isDefault: PrimitiveBooleanSchema,
  compositional: PrimitiveBooleanSchema,
  language: [PrimitiveCodeSchema],
  filter: [TerminologyCapabilitiesCodeSystemVersionFilterSchema],
  property: [PrimitiveCodeSchema],
});

module.exports.TerminologyCapabilitiesCodeSystemVersionSchema = TerminologyCapabilitiesCodeSystemVersionSchema;
