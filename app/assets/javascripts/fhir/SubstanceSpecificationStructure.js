const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SubstanceSpecificationStructureIsotopeSchema } = require('./SubstanceSpecificationStructureIsotope');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./SubstanceSpecificationStructureIsotopeMolecularWeight');
const { SubstanceSpecificationStructureRepresentationSchema } = require('./SubstanceSpecificationStructureRepresentation');

const SubstanceSpecificationStructureSchema = BackboneElementSchemaFunction({
  stereochemistry: CodeableConceptSchema,
  opticalActivity: CodeableConceptSchema,
  molecularFormula: PrimitiveStringSchema,
  molecularFormulaByMoiety: PrimitiveStringSchema,
  isotope: [SubstanceSpecificationStructureIsotopeSchema],
  molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeightSchema,
  source: [ReferenceSchema],
  representation: [SubstanceSpecificationStructureRepresentationSchema],
  typeName: { type: String, default: 'SubstanceSpecificationStructure' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationStructure' },
});

class SubstanceSpecificationStructure extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureSchema);
    this.typeName = 'SubstanceSpecificationStructure';
    this._type = 'FHIR::SubstanceSpecificationStructure';
  }
}

module.exports.SubstanceSpecificationStructureSchema = SubstanceSpecificationStructureSchema;
module.exports.SubstanceSpecificationStructure = SubstanceSpecificationStructure;
