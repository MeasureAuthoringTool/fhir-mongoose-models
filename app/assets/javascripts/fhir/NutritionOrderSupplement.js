const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { TimingSchema } = require('./allSchemaHeaders.js');
const { NutritionOrderSupplementSchema } = require('./allSchemaHeaders.js');

NutritionOrderSupplementSchema.add(BackboneElementSchema);
NutritionOrderSupplementSchema.remove('id');
NutritionOrderSupplementSchema.add({
  type: CodeableConceptSchema,
  productName: PrimitiveStringSchema,
  schedule: [TimingSchema],
  quantity: SimpleQuantitySchema,
  instruction: PrimitiveStringSchema,
});

module.exports.NutritionOrderSupplementSchema = NutritionOrderSupplementSchema;
