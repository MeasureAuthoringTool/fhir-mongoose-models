const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureIsotopeSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureRepresentationSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationStructureSchema.add(BackboneElementSchema);
SubstanceSpecificationStructureSchema.remove('id');
SubstanceSpecificationStructureSchema.add({
  stereochemistry: CodeableConceptSchema,
  opticalActivity: CodeableConceptSchema,
  molecularFormula: PrimitiveStringSchema,
  molecularFormulaByMoiety: PrimitiveStringSchema,
  isotope: [SubstanceSpecificationStructureIsotopeSchema],
  molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeightSchema,
  source: [ReferenceSchema],
  representation: [SubstanceSpecificationStructureRepresentationSchema],
});

module.exports.SubstanceSpecificationStructureSchema = SubstanceSpecificationStructureSchema;
