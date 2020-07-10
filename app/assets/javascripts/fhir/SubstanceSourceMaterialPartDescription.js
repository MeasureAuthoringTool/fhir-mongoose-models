const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { SubstanceSourceMaterialPartDescriptionSchema } = require('./allSchemaHeaders.js');

SubstanceSourceMaterialPartDescriptionSchema.add(BackboneElementSchema);
SubstanceSourceMaterialPartDescriptionSchema.remove('id');
SubstanceSourceMaterialPartDescriptionSchema.add({
  part: CodeableConceptSchema,
  partLocation: CodeableConceptSchema,
});

module.exports.SubstanceSourceMaterialPartDescriptionSchema = SubstanceSourceMaterialPartDescriptionSchema;
