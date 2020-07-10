const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialOrganismHybridSchema } = require('./allSchemaHeaders.js');

SubstanceSourceMaterialOrganismHybridSchema.add(BackboneElementSchema);
SubstanceSourceMaterialOrganismHybridSchema.remove('id');
SubstanceSourceMaterialOrganismHybridSchema.add({
  maternalOrganismId: PrimitiveStringSchema,
  maternalOrganismName: PrimitiveStringSchema,
  paternalOrganismId: PrimitiveStringSchema,
  paternalOrganismName: PrimitiveStringSchema,
  hybridType: CodeableConceptSchema,
});

module.exports.SubstanceSourceMaterialOrganismHybridSchema = SubstanceSourceMaterialOrganismHybridSchema;
