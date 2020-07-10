const { ElementSchema } = require('./Element');
const { MedicationRequestPrioritySchema } = require('./allSchemaHeaders.js');

MedicationRequestPrioritySchema.add(ElementSchema);
MedicationRequestPrioritySchema.remove('id');
MedicationRequestPrioritySchema.add({
  value: String,
});

module.exports.MedicationRequestPrioritySchema = MedicationRequestPrioritySchema;
