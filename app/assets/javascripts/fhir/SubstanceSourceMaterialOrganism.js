const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SubstanceSourceMaterialOrganismAuthorSchema } = require('./SubstanceSourceMaterialOrganismAuthor');
const { SubstanceSourceMaterialOrganismHybridSchema } = require('./SubstanceSourceMaterialOrganismHybrid');
const { SubstanceSourceMaterialOrganismOrganismGeneralSchema } = require('./SubstanceSourceMaterialOrganismOrganismGeneral');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SubstanceSourceMaterialOrganismSchema = BackboneElementSchemaFunction({
   family : CodeableConceptSchema,
   genus : CodeableConceptSchema,
   species : CodeableConceptSchema,
   intraspecificType : CodeableConceptSchema,
   intraspecificDescription : String,
   author : [SubstanceSourceMaterialOrganismAuthorSchema],
   hybrid : SubstanceSourceMaterialOrganismHybridSchema,
   organismGeneral : SubstanceSourceMaterialOrganismOrganismGeneralSchema,
   fhirTitle: { type: String, default: 'SubstanceSourceMaterialOrganism' },
});

class SubstanceSourceMaterialOrganism extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismSchema);
    this._type = 'FHIR::SubstanceSourceMaterialOrganism';
  }
};


module.exports.SubstanceSourceMaterialOrganismSchema = SubstanceSourceMaterialOrganismSchema;
module.exports.SubstanceSourceMaterialOrganism = SubstanceSourceMaterialOrganism;
