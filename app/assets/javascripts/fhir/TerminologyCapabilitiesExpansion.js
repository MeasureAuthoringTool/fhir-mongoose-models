const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesExpansionParameterSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesExpansionSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesExpansionSchema.add(BackboneElementSchema);
TerminologyCapabilitiesExpansionSchema.remove('id');
TerminologyCapabilitiesExpansionSchema.add({
  hierarchical: PrimitiveBooleanSchema,
  paging: PrimitiveBooleanSchema,
  incomplete: PrimitiveBooleanSchema,
  parameter: [TerminologyCapabilitiesExpansionParameterSchema],
  textFilter: PrimitiveMarkdownSchema,
});

module.exports.TerminologyCapabilitiesExpansionSchema = TerminologyCapabilitiesExpansionSchema;
