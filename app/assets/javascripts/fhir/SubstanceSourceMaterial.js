const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialFractionDescriptionSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialPartDescriptionSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialSchema } = require('./allSchemaHeaders.js');

SubstanceSourceMaterialSchema.add(DomainResourceSchema);
SubstanceSourceMaterialSchema.remove('id');
SubstanceSourceMaterialSchema.add({
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
});

module.exports.SubstanceSourceMaterialSchema = SubstanceSourceMaterialSchema;
