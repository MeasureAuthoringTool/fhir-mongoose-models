const { ElementSchema } = require('./Element');
const { AllergyIntoleranceCriticalitySchema } = require('./allSchemaHeaders.js');

AllergyIntoleranceCriticalitySchema.add(ElementSchema);
AllergyIntoleranceCriticalitySchema.remove('id');
AllergyIntoleranceCriticalitySchema.add({
  value: String,
});

module.exports.AllergyIntoleranceCriticalitySchema = AllergyIntoleranceCriticalitySchema;
