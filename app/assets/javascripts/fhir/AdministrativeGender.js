const { ElementSchema } = require('./Element');
const { AdministrativeGenderSchema } = require('./allSchemaHeaders.js');

AdministrativeGenderSchema.add(ElementSchema);
AdministrativeGenderSchema.remove('id');
AdministrativeGenderSchema.add({
  value: String,
});

module.exports.AdministrativeGenderSchema = AdministrativeGenderSchema;
