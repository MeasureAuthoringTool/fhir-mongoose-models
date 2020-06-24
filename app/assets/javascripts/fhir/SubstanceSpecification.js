const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { SubstanceSpecificationCodeSchema } = require('./SubstanceSpecificationCode');
const { SubstanceSpecificationMoietySchema } = require('./SubstanceSpecificationMoiety');
const { SubstanceSpecificationNameSchema } = require('./SubstanceSpecificationName');
const { SubstanceSpecificationPropertySchema } = require('./SubstanceSpecificationProperty');
const { SubstanceSpecificationRelationshipSchema } = require('./SubstanceSpecificationRelationship');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./SubstanceSpecificationStructureIsotopeMolecularWeight');
const { SubstanceSpecificationStructureSchema } = require('./SubstanceSpecificationStructure');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSpecificationSchema = DomainResourceSchemaFunction({
   identifier : IdentifierSchema,
   type : CodeableConceptSchema,
   status : CodeableConceptSchema,
   domain : CodeableConceptSchema,
   description : String,
   source : [ReferenceSchema],
   comment : String,
   moiety : [SubstanceSpecificationMoietySchema],
   property : [SubstanceSpecificationPropertySchema],
   referenceInformation : ReferenceSchema,
   structure : SubstanceSpecificationStructureSchema,
   code : [SubstanceSpecificationCodeSchema],
   name : [SubstanceSpecificationNameSchema],
   molecularWeight : [SubstanceSpecificationStructureIsotopeMolecularWeightSchema],
   relationship : [SubstanceSpecificationRelationshipSchema],
   nucleicAcid : ReferenceSchema,
   polymer : ReferenceSchema,
   protein : ReferenceSchema,
   sourceMaterial : ReferenceSchema,
   fhirTitle: { type: String, default: 'SubstanceSpecification' },
});

class SubstanceSpecification extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationSchema);
    this._type = 'FHIR::SubstanceSpecification';
  }
};


module.exports.SubstanceSpecificationSchema = SubstanceSpecificationSchema;
module.exports.SubstanceSpecification = SubstanceSpecification;
