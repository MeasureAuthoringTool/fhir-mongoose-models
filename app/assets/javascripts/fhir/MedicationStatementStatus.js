const { ElementSchema } = require('./Element');
const { MedicationStatementStatusSchema } = require('./allSchemaHeaders.js');

MedicationStatementStatusSchema.add(ElementSchema);
MedicationStatementStatusSchema.remove('id');
MedicationStatementStatusSchema.add({
  value: String,
});

module.exports.MedicationStatementStatusSchema = MedicationStatementStatusSchema;
