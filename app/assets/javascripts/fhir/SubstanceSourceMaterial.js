const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceSourceMaterialFractionDescriptionSchema } = require('./SubstanceSourceMaterialFractionDescription');
const { SubstanceSourceMaterialOrganismSchema } = require('./SubstanceSourceMaterialOrganism');
const { SubstanceSourceMaterialPartDescriptionSchema } = require('./SubstanceSourceMaterialPartDescription');

const SubstanceSourceMaterialSchema = DomainResourceSchemaFunction({
  sourceMaterialClass: CodeableConceptSchema,
  sourceMaterialType: CodeableConceptSchema,
  sourceMaterialState: CodeableConceptSchema,
  organismId: IdentifierSchema,
  organismName: PrimitiveStringSchema,
  parentSubstanceId: [IdentifierSchema],
  parentSubstanceName: [PrimitiveStringSchema],
  countryOfOrigin: [CodeableConceptSchema],
  geographicalLocation: [PrimitiveStringSchema],
  developmentStage: CodeableConceptSchema,
  fractionDescription: [SubstanceSourceMaterialFractionDescriptionSchema],
  organism: SubstanceSourceMaterialOrganismSchema,
  partDescription: [SubstanceSourceMaterialPartDescriptionSchema],
  typeName: { type: String, default: 'SubstanceSourceMaterial' },
  _type: { type: String, default: 'FHIR::SubstanceSourceMaterial' },
});

class SubstanceSourceMaterial extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialSchema);
    this.typeName = 'SubstanceSourceMaterial';
    this._type = 'FHIR::SubstanceSourceMaterial';
  }
}

module.exports.SubstanceSourceMaterialSchema = SubstanceSourceMaterialSchema;
module.exports.SubstanceSourceMaterial = SubstanceSourceMaterial;
