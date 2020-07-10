const { ElementSchema } = require('./Element');
const { MedicationRequestIntentSchema } = require('./allSchemaHeaders.js');

MedicationRequestIntentSchema.add(ElementSchema);
MedicationRequestIntentSchema.remove('id');
MedicationRequestIntentSchema.add({
  value: String,
});

module.exports.MedicationRequestIntentSchema = MedicationRequestIntentSchema;
