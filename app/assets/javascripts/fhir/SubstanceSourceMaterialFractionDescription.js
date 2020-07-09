const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialFractionDescriptionSchema } = require('./allSchemaHeaders.js');

SubstanceSourceMaterialFractionDescriptionSchema.add(BackboneElementSchema);
SubstanceSourceMaterialFractionDescriptionSchema.remove('id');
SubstanceSourceMaterialFractionDescriptionSchema.add({
  fraction: PrimitiveStringSchema,
  materialType: CodeableConceptSchema,
});

module.exports.SubstanceSourceMaterialFractionDescriptionSchema = SubstanceSourceMaterialFractionDescriptionSchema;
