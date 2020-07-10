const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema } = require('./allSchemaHeaders.js');

MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema.add(BackboneElementSchema);
MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema.remove('id');
MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema.add({
  substance: CodeableConceptSchema,
  strength: RatioSchema,
  strengthLowLimit: RatioSchema,
  measurementPoint: PrimitiveStringSchema,
  country: [CodeableConceptSchema],
});

module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema = MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema;
