const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema } = require('./allSchemaHeaders.js');

MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema.add(BackboneElementSchema);
MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema.remove('id');
MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema.add({
  code: CodeableConceptSchema,
  withdrawalPeriod: [MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodSchema],
});

module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema = MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema;
