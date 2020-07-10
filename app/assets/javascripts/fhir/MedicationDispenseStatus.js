const { ElementSchema } = require('./Element');
const { MedicationDispenseStatusSchema } = require('./allSchemaHeaders.js');

MedicationDispenseStatusSchema.add(ElementSchema);
MedicationDispenseStatusSchema.remove('id');
MedicationDispenseStatusSchema.add({
  value: String,
});

module.exports.MedicationDispenseStatusSchema = MedicationDispenseStatusSchema;
