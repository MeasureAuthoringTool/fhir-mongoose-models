const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismAuthorSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismHybridSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismOrganismGeneralSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismSchema } = require('./allSchemaHeaders.js');

SubstanceSourceMaterialOrganismSchema.add(BackboneElementSchema);
SubstanceSourceMaterialOrganismSchema.remove('id');
SubstanceSourceMaterialOrganismSchema.add({
  family: CodeableConceptSchema,
  genus: CodeableConceptSchema,
  species: CodeableConceptSchema,
  intraspecificType: CodeableConceptSchema,
  intraspecificDescription: PrimitiveStringSchema,
  author: [SubstanceSourceMaterialOrganismAuthorSchema],
  hybrid: SubstanceSourceMaterialOrganismHybridSchema,
  organismGeneral: SubstanceSourceMaterialOrganismOrganismGeneralSchema,
});

module.exports.SubstanceSourceMaterialOrganismSchema = SubstanceSourceMaterialOrganismSchema;
