const { ElementSchema } = require('./Element');
const { MedicationStatusSchema } = require('./allSchemaHeaders.js');

MedicationStatusSchema.add(ElementSchema);
MedicationStatusSchema.remove('id');
MedicationStatusSchema.add({
  value: String,
});

module.exports.MedicationStatusSchema = MedicationStatusSchema;
