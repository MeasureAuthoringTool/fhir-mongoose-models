const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationRequestDispenseRequestInitialFillSchema } = require('./allSchemaHeaders.js');

MedicationRequestDispenseRequestInitialFillSchema.add(BackboneElementSchema);
MedicationRequestDispenseRequestInitialFillSchema.remove('id');
MedicationRequestDispenseRequestInitialFillSchema.add({
  quantity: SimpleQuantitySchema,
  duration: DurationSchema,
});

module.exports.MedicationRequestDispenseRequestInitialFillSchema = MedicationRequestDispenseRequestInitialFillSchema;
