const { ElementSchema } = require('./Element');
const { NutritionOrderStatusSchema } = require('./allSchemaHeaders.js');

NutritionOrderStatusSchema.add(ElementSchema);
NutritionOrderStatusSchema.remove('id');
NutritionOrderStatusSchema.add({
  value: String,
});

module.exports.NutritionOrderStatusSchema = NutritionOrderStatusSchema;
