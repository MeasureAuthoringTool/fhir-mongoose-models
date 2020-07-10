const { ElementSchema } = require('./Element');
const { NutritiionOrderIntentSchema } = require('./allSchemaHeaders.js');

NutritiionOrderIntentSchema.add(ElementSchema);
NutritiionOrderIntentSchema.remove('id');
NutritiionOrderIntentSchema.add({
  value: String,
});

module.exports.NutritiionOrderIntentSchema = NutritiionOrderIntentSchema;
