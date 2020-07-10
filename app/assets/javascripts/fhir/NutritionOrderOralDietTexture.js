const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderOralDietTextureSchema } = require('./allSchemaHeaders.js');

NutritionOrderOralDietTextureSchema.add(BackboneElementSchema);
NutritionOrderOralDietTextureSchema.remove('id');
NutritionOrderOralDietTextureSchema.add({
  modifier: CodeableConceptSchema,
  foodType: CodeableConceptSchema,
});

module.exports.NutritionOrderOralDietTextureSchema = NutritionOrderOralDietTextureSchema;
