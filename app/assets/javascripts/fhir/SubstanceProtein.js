const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceProteinSubunitSchema } = require('./allSchemaHeaders.js');
const { SubstanceProteinSchema } = require('./allSchemaHeaders.js');

SubstanceProteinSchema.add(DomainResourceSchema);
SubstanceProteinSchema.remove('id');
SubstanceProteinSchema.add({
  sequenceType: CodeableConceptSchema,
  numberOfSubunits: PrimitiveIntegerSchema,
  disulfideLinkage: [PrimitiveStringSchema],
  subunit: [SubstanceProteinSubunitSchema],
});

module.exports.SubstanceProteinSchema = SubstanceProteinSchema;
