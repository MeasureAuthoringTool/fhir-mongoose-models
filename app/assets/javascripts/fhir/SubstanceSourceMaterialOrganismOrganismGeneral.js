const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismOrganismGeneralSchema } = require('./allSchemaHeaders.js');

SubstanceSourceMaterialOrganismOrganismGeneralSchema.add(BackboneElementSchema);
SubstanceSourceMaterialOrganismOrganismGeneralSchema.remove('id');
SubstanceSourceMaterialOrganismOrganismGeneralSchema.add({
  kingdom: CodeableConceptSchema,
  phylum: CodeableConceptSchema,
  class: CodeableConceptSchema,
  order: CodeableConceptSchema,
});

module.exports.SubstanceSourceMaterialOrganismOrganismGeneralSchema = SubstanceSourceMaterialOrganismOrganismGeneralSchema;
