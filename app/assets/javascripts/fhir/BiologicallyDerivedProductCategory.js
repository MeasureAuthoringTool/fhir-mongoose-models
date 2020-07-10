const { ElementSchema } = require('./Element');
const { BiologicallyDerivedProductCategorySchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductCategorySchema.add(ElementSchema);
BiologicallyDerivedProductCategorySchema.remove('id');
BiologicallyDerivedProductCategorySchema.add({
  value: String,
});

module.exports.BiologicallyDerivedProductCategorySchema = BiologicallyDerivedProductCategorySchema;
