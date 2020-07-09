const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSpecifiedSubstanceSchema } = require('./allSchemaHeaders.js');

MedicinalProductIngredientSpecifiedSubstanceSchema.add(BackboneElementSchema);
MedicinalProductIngredientSpecifiedSubstanceSchema.remove('id');
MedicinalProductIngredientSpecifiedSubstanceSchema.add({
  code: CodeableConceptSchema,
  group: CodeableConceptSchema,
  confidentiality: CodeableConceptSchema,
  strength: [MedicinalProductIngredientSpecifiedSubstanceStrengthSchema],
});

module.exports.MedicinalProductIngredientSpecifiedSubstanceSchema = MedicinalProductIngredientSpecifiedSubstanceSchema;
