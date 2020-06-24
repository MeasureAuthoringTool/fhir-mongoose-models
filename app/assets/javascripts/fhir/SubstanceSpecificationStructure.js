const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./SubstanceSpecificationStructureIsotopeMolecularWeight');
const { SubstanceSpecificationStructureIsotopeSchema } = require('./SubstanceSpecificationStructureIsotope');
const { SubstanceSpecificationStructureRepresentationSchema } = require('./SubstanceSpecificationStructureRepresentation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationStructureSchema = BackboneElementSchemaFunction({
   stereochemistry : CodeableConceptSchema,
   opticalActivity : CodeableConceptSchema,
   molecularFormula : String,
   molecularFormulaByMoiety : String,
   isotope : [SubstanceSpecificationStructureIsotopeSchema],
   molecularWeight : SubstanceSpecificationStructureIsotopeMolecularWeightSchema,
   source : [ReferenceSchema],
   representation : [SubstanceSpecificationStructureRepresentationSchema],
   fhirTitle: { type: String, default: 'SubstanceSpecificationStructure' },
});

class SubstanceSpecificationStructure extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationStructureSchema);
    this._type = 'FHIR::SubstanceSpecificationStructure';
  }
};


module.exports.SubstanceSpecificationStructureSchema = SubstanceSpecificationStructureSchema;
module.exports.SubstanceSpecificationStructure = SubstanceSpecificationStructure;
