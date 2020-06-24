const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationStructureIsotopeMolecularWeightSchema = BackboneElementSchemaFunction({
   method : CodeableConceptSchema,
   type : CodeableConceptSchema,
   amount : QuantitySchema,
   fhirTitle: { type: String, default: 'SubstanceSpecificationStructureIsotopeMolecularWeight' },
});

class SubstanceSpecificationStructureIsotopeMolecularWeight extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureIsotopeMolecularWeightSchema);
    this._type = 'FHIR::SubstanceSpecificationStructureIsotopeMolecularWeight';
  }
};


module.exports.SubstanceSpecificationStructureIsotopeMolecularWeightSchema = SubstanceSpecificationStructureIsotopeMolecularWeightSchema;
module.exports.SubstanceSpecificationStructureIsotopeMolecularWeight = SubstanceSpecificationStructureIsotopeMolecularWeight;
