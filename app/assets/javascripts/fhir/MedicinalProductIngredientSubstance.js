const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSubstanceSchema } = require('./allSchemaHeaders.js');

MedicinalProductIngredientSubstanceSchema.add(BackboneElementSchema);
MedicinalProductIngredientSubstanceSchema.remove('id');
MedicinalProductIngredientSubstanceSchema.add({
  code: CodeableConceptSchema,
  strength: [MedicinalProductIngredientSpecifiedSubstanceStrengthSchema],
});

module.exports.MedicinalProductIngredientSubstanceSchema = MedicinalProductIngredientSubstanceSchema;
