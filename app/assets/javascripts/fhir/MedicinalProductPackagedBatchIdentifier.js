const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPackagedBatchIdentifierSchema } = require('./allSchemaHeaders.js');

MedicinalProductPackagedBatchIdentifierSchema.add(BackboneElementSchema);
MedicinalProductPackagedBatchIdentifierSchema.remove('id');
MedicinalProductPackagedBatchIdentifierSchema.add({
  outerPackaging: IdentifierSchema,
  immediatePackaging: IdentifierSchema,
});

module.exports.MedicinalProductPackagedBatchIdentifierSchema = MedicinalProductPackagedBatchIdentifierSchema;
