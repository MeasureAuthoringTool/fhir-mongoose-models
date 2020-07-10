const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalRouteOfAdministrationSchema } = require('./allSchemaHeaders.js');

MedicinalProductPharmaceuticalRouteOfAdministrationSchema.add(BackboneElementSchema);
MedicinalProductPharmaceuticalRouteOfAdministrationSchema.remove('id');
MedicinalProductPharmaceuticalRouteOfAdministrationSchema.add({
  code: CodeableConceptSchema,
  firstDose: QuantitySchema,
  maxSingleDose: QuantitySchema,
  maxDosePerDay: QuantitySchema,
  maxDosePerTreatmentPeriod: RatioSchema,
  maxTreatmentPeriod: DurationSchema,
  targetSpecies: [MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesSchema],
});

module.exports.MedicinalProductPharmaceuticalRouteOfAdministrationSchema = MedicinalProductPharmaceuticalRouteOfAdministrationSchema;
