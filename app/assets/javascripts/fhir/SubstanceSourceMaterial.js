const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { SubstanceSourceMaterialFractionDescriptionSchema } = require('./SubstanceSourceMaterialFractionDescription');
const { SubstanceSourceMaterialOrganismSchema } = require('./SubstanceSourceMaterialOrganism');
const { SubstanceSourceMaterialPartDescriptionSchema } = require('./SubstanceSourceMaterialPartDescription');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSourceMaterialSchema = DomainResourceSchemaFunction({
   sourceMaterialClass : CodeableConceptSchema,
   sourceMaterialType : CodeableConceptSchema,
   sourceMaterialState : CodeableConceptSchema,
   organismId : IdentifierSchema,
   organismName : String,
   parentSubstanceId : [IdentifierSchema],
   parentSubstanceName : [String],
   countryOfOrigin : [CodeableConceptSchema],
   geographicalLocation : [String],
   developmentStage : CodeableConceptSchema,
   fractionDescription : [SubstanceSourceMaterialFractionDescriptionSchema],
   organism : SubstanceSourceMaterialOrganismSchema,
   partDescription : [SubstanceSourceMaterialPartDescriptionSchema],
   fhirTitle: { type: String, default: 'SubstanceSourceMaterial' },
});

class SubstanceSourceMaterial extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialSchema);
    this._type = 'FHIR::SubstanceSourceMaterial';
  }
};


module.exports.SubstanceSourceMaterialSchema = SubstanceSourceMaterialSchema;
module.exports.SubstanceSourceMaterial = SubstanceSourceMaterial;
