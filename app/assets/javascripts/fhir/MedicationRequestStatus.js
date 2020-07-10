const { ElementSchema } = require('./Element');
const { MedicationRequestStatusSchema } = require('./allSchemaHeaders.js');

MedicationRequestStatusSchema.add(ElementSchema);
MedicationRequestStatusSchema.remove('id');
MedicationRequestStatusSchema.add({
  value: String,
});

module.exports.MedicationRequestStatusSchema = MedicationRequestStatusSchema;
