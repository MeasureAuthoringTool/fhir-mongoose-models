const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');

const SubstanceSpecificationStructureIsotopeMolecularWeightSchema = BackboneElementSchemaFunction({
  method: CodeableConceptSchema,
  type: CodeableConceptSchema,
  amount: QuantitySchema,
  typeName: { type: String, default: 'SubstanceSpecificationStructureIsotopeMolecularWeight' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationStructureIsotopeMolecularWeight' },
});

class SubstanceSpecificationStructureIsotopeMolecularWeight extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureIsotopeMolecularWeightSchema);
    this.typeName = 'SubstanceSpecificationStructureIsotopeMolecularWeight';
    this._type = 'FHIR::SubstanceSpecificationStructureIsotopeMolecularWeight';
  }
}

module.exports.SubstanceSpecificationStructureIsotopeMolecularWeightSchema = SubstanceSpecificationStructureIsotopeMolecularWeightSchema;
module.exports.SubstanceSpecificationStructureIsotopeMolecularWeight = SubstanceSpecificationStructureIsotopeMolecularWeight;
