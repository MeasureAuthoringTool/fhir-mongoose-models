const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationStructureIsotopeMolecularWeightSchema.add(BackboneElementSchema);
SubstanceSpecificationStructureIsotopeMolecularWeightSchema.remove('id');
SubstanceSpecificationStructureIsotopeMolecularWeightSchema.add({
  method: CodeableConceptSchema,
  type: CodeableConceptSchema,
  amount: QuantitySchema,
});

module.exports.SubstanceSpecificationStructureIsotopeMolecularWeightSchema = SubstanceSpecificationStructureIsotopeMolecularWeightSchema;
