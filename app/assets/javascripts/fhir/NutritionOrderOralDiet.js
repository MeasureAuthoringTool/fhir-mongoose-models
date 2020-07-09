const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderOralDietNutrientSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderOralDietTextureSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderOralDietSchema } = require('./allSchemaHeaders.js');

NutritionOrderOralDietSchema.add(BackboneElementSchema);
NutritionOrderOralDietSchema.remove('id');
NutritionOrderOralDietSchema.add({
  type: [CodeableConceptSchema],
  schedule: [TimingSchema],
  nutrient: [NutritionOrderOralDietNutrientSchema],
  texture: [NutritionOrderOralDietTextureSchema],
  fluidConsistencyType: [CodeableConceptSchema],
  instruction: PrimitiveStringSchema,
});

module.exports.NutritionOrderOralDietSchema = NutritionOrderOralDietSchema;
