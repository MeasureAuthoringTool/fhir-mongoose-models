const { ElementSchema } = require('./Element');
const { ImmunizationStatusSchema } = require('./allSchemaHeaders.js');

ImmunizationStatusSchema.add(ElementSchema);
ImmunizationStatusSchema.remove('id');
ImmunizationStatusSchema.add({
  value: String,
});

module.exports.ImmunizationStatusSchema = ImmunizationStatusSchema;
