const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { QuantitySchema } = require('./Quantity');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./SubstanceSpecificationStructureIsotopeMolecularWeight');

const SubstanceSpecificationStructureIsotopeSchema = BackboneElementSchemaFunction({
  identifier: IdentifierSchema,
  name: CodeableConceptSchema,
  substitution: CodeableConceptSchema,
  halfLife: QuantitySchema,
  molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeightSchema,
  typeName: { type: String, default: 'SubstanceSpecificationStructureIsotope' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationStructureIsotope' },
});

class SubstanceSpecificationStructureIsotope extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureIsotopeSchema);
    this.typeName = 'SubstanceSpecificationStructureIsotope';
    this._type = 'FHIR::SubstanceSpecificationStructureIsotope';
  }
}

module.exports.SubstanceSpecificationStructureIsotopeSchema = SubstanceSpecificationStructureIsotopeSchema;
module.exports.SubstanceSpecificationStructureIsotope = SubstanceSpecificationStructureIsotope;
