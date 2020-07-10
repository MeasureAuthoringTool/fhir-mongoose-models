const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerMonomerSetSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerSchema } = require('./allSchemaHeaders.js');

SubstancePolymerSchema.add(DomainResourceSchema);
SubstancePolymerSchema.remove('id');
SubstancePolymerSchema.add({
  class: CodeableConceptSchema,
  geometry: CodeableConceptSchema,
  copolymerConnectivity: [CodeableConceptSchema],
  modification: [PrimitiveStringSchema],
  monomerSet: [SubstancePolymerMonomerSetSchema],
  repeat: [SubstancePolymerRepeatSchema],
});

module.exports.SubstancePolymerSchema = SubstancePolymerSchema;
