const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { QuantitySchema } = require('./Quantity');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./SubstanceSpecificationStructureIsotopeMolecularWeight');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationStructureIsotopeSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   name : CodeableConceptSchema,
   substitution : CodeableConceptSchema,
   halfLife : QuantitySchema,
   molecularWeight : SubstanceSpecificationStructureIsotopeMolecularWeightSchema,
   fhirTitle: { type: String, default: 'SubstanceSpecificationStructureIsotope' },
});

class SubstanceSpecificationStructureIsotope extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureIsotopeSchema);
    this._type = 'FHIR::SubstanceSpecificationStructureIsotope';
  }
};


module.exports.SubstanceSpecificationStructureIsotopeSchema = SubstanceSpecificationStructureIsotopeSchema;
module.exports.SubstanceSpecificationStructureIsotope = SubstanceSpecificationStructureIsotope;
