const { BackboneElementSchema } = require('./BackboneElement');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderEnteralFormulaAdministrationSchema } = require('./allSchemaHeaders.js');

NutritionOrderEnteralFormulaAdministrationSchema.add(BackboneElementSchema);
NutritionOrderEnteralFormulaAdministrationSchema.remove('id');
NutritionOrderEnteralFormulaAdministrationSchema.add({
  schedule: TimingSchema,
  quantity: SimpleQuantitySchema,
  rateSimpleQuantity: SimpleQuantitySchema,
  rateRatio: RatioSchema,
});

module.exports.NutritionOrderEnteralFormulaAdministrationSchema = NutritionOrderEnteralFormulaAdministrationSchema;
