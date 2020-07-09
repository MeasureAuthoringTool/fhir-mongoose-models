const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema } = require('./allSchemaHeaders.js');

MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema.add(BackboneElementSchema);
MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema.remove('id');
MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema.add({
  tissue: CodeableConceptSchema,
  value: QuantitySchema,
  supportingInformation: PrimitiveStringSchema,
});

module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema;
