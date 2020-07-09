const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSpecifiedSubstanceStrengthSchema } = require('./allSchemaHeaders.js');

MedicinalProductIngredientSpecifiedSubstanceStrengthSchema.add(BackboneElementSchema);
MedicinalProductIngredientSpecifiedSubstanceStrengthSchema.remove('id');
MedicinalProductIngredientSpecifiedSubstanceStrengthSchema.add({
  presentation: RatioSchema,
  presentationLowLimit: RatioSchema,
  concentration: RatioSchema,
  concentrationLowLimit: RatioSchema,
  measurementPoint: PrimitiveStringSchema,
  country: [CodeableConceptSchema],
  referenceStrength: [MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthSchema],
});

module.exports.MedicinalProductIngredientSpecifiedSubstanceStrengthSchema = MedicinalProductIngredientSpecifiedSubstanceStrengthSchema;
