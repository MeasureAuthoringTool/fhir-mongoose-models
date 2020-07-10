const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { MedicationBatchSchema } = require('./allSchemaHeaders.js');

MedicationBatchSchema.add(BackboneElementSchema);
MedicationBatchSchema.remove('id');
MedicationBatchSchema.add({
  lotNumber: PrimitiveStringSchema,
  expirationDate: PrimitiveDateTimeSchema,
});

module.exports.MedicationBatchSchema = MedicationBatchSchema;
