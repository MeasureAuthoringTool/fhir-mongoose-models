const { ElementSchema } = require('./Element');
const { AllergyIntoleranceTypeSchema } = require('./allSchemaHeaders.js');

AllergyIntoleranceTypeSchema.add(ElementSchema);
AllergyIntoleranceTypeSchema.remove('id');
AllergyIntoleranceTypeSchema.add({
  value: String,
});

module.exports.AllergyIntoleranceTypeSchema = AllergyIntoleranceTypeSchema;
