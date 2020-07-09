const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { MedicationRequestDispenseRequestInitialFillSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationRequestDispenseRequestSchema } = require('./allSchemaHeaders.js');

MedicationRequestDispenseRequestSchema.add(BackboneElementSchema);
MedicationRequestDispenseRequestSchema.remove('id');
MedicationRequestDispenseRequestSchema.add({
  initialFill: MedicationRequestDispenseRequestInitialFillSchema,
  dispenseInterval: DurationSchema,
  validityPeriod: PeriodSchema,
  numberOfRepeatsAllowed: PrimitiveUnsignedIntSchema,
  quantity: SimpleQuantitySchema,
  expectedSupplyDuration: DurationSchema,
  performer: ReferenceSchema,
});

module.exports.MedicationRequestDispenseRequestSchema = MedicationRequestDispenseRequestSchema;
