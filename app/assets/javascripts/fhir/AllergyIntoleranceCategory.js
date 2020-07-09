const { ElementSchema } = require('./Element');
const { AllergyIntoleranceCategorySchema } = require('./allSchemaHeaders.js');

AllergyIntoleranceCategorySchema.add(ElementSchema);
AllergyIntoleranceCategorySchema.remove('id');
AllergyIntoleranceCategorySchema.add({
  value: String,
});

module.exports.AllergyIntoleranceCategorySchema = AllergyIntoleranceCategorySchema;
