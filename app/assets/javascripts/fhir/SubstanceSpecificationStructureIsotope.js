const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureIsotopeSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationStructureIsotopeSchema.add(BackboneElementSchema);
SubstanceSpecificationStructureIsotopeSchema.remove('id');
SubstanceSpecificationStructureIsotopeSchema.add({
  identifier: IdentifierSchema,
  name: CodeableConceptSchema,
  substitution: CodeableConceptSchema,
  halfLife: QuantitySchema,
  molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeightSchema,
});

module.exports.SubstanceSpecificationStructureIsotopeSchema = SubstanceSpecificationStructureIsotopeSchema;
