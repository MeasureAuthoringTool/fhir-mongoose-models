const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceNucleicAcidSubunitSchema } = require('./allSchemaHeaders.js');
const { SubstanceNucleicAcidSchema } = require('./allSchemaHeaders.js');

SubstanceNucleicAcidSchema.add(DomainResourceSchema);
SubstanceNucleicAcidSchema.remove('id');
SubstanceNucleicAcidSchema.add({
  sequenceType: CodeableConceptSchema,
  numberOfSubunits: PrimitiveIntegerSchema,
  areaOfHybridisation: PrimitiveStringSchema,
  oligoNucleotideType: CodeableConceptSchema,
  subunit: [SubstanceNucleicAcidSubunitSchema],
});

module.exports.SubstanceNucleicAcidSchema = SubstanceNucleicAcidSchema;
