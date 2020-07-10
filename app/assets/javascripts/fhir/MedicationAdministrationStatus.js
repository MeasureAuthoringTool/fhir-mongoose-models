const { ElementSchema } = require('./Element');
const { MedicationAdministrationStatusSchema } = require('./allSchemaHeaders.js');

MedicationAdministrationStatusSchema.add(ElementSchema);
MedicationAdministrationStatusSchema.remove('id');
MedicationAdministrationStatusSchema.add({
  value: String,
});

module.exports.MedicationAdministrationStatusSchema = MedicationAdministrationStatusSchema;
