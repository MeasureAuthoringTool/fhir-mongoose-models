const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismAuthorSchema } = require('./allSchemaHeaders.js');

SubstanceSourceMaterialOrganismAuthorSchema.add(BackboneElementSchema);
SubstanceSourceMaterialOrganismAuthorSchema.remove('id');
SubstanceSourceMaterialOrganismAuthorSchema.add({
  authorType: CodeableConceptSchema,
  authorDescription: PrimitiveStringSchema,
});

module.exports.SubstanceSourceMaterialOrganismAuthorSchema = SubstanceSourceMaterialOrganismAuthorSchema;
