const { ElementSchema } = require('./Element');
const { AllergyIntoleranceSeveritySchema } = require('./allSchemaHeaders.js');

AllergyIntoleranceSeveritySchema.add(ElementSchema);
AllergyIntoleranceSeveritySchema.remove('id');
AllergyIntoleranceSeveritySchema.add({
  value: String,
});

module.exports.AllergyIntoleranceSeveritySchema = AllergyIntoleranceSeveritySchema;
