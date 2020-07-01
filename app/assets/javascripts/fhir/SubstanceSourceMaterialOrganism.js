const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceSourceMaterialOrganismAuthorSchema } = require('./SubstanceSourceMaterialOrganismAuthor');
const { SubstanceSourceMaterialOrganismHybridSchema } = require('./SubstanceSourceMaterialOrganismHybrid');
const { SubstanceSourceMaterialOrganismOrganismGeneralSchema } = require('./SubstanceSourceMaterialOrganismOrganismGeneral');

const SubstanceSourceMaterialOrganismSchema = BackboneElementSchemaFunction({
  family: CodeableConceptSchema,
  genus: CodeableConceptSchema,
  species: CodeableConceptSchema,
  intraspecificType: CodeableConceptSchema,
  intraspecificDescription: PrimitiveStringSchema,
  author: [SubstanceSourceMaterialOrganismAuthorSchema],
  hybrid: SubstanceSourceMaterialOrganismHybridSchema,
  organismGeneral: SubstanceSourceMaterialOrganismOrganismGeneralSchema,
  typeName: { type: String, default: 'SubstanceSourceMaterialOrganism' },
  _type: { type: String, default: 'FHIR::SubstanceSourceMaterialOrganism' },
});

class SubstanceSourceMaterialOrganism extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismSchema);
    this.typeName = 'SubstanceSourceMaterialOrganism';
    this._type = 'FHIR::SubstanceSourceMaterialOrganism';
  }
}

module.exports.SubstanceSourceMaterialOrganismSchema = SubstanceSourceMaterialOrganismSchema;
module.exports.SubstanceSourceMaterialOrganism = SubstanceSourceMaterialOrganism;
