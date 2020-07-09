const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductPharmaceuticalCharacteristicsSchema } = require('./allSchemaHeaders.js');

MedicinalProductPharmaceuticalCharacteristicsSchema.add(BackboneElementSchema);
MedicinalProductPharmaceuticalCharacteristicsSchema.remove('id');
MedicinalProductPharmaceuticalCharacteristicsSchema.add({
  code: CodeableConceptSchema,
  status: CodeableConceptSchema,
});

module.exports.MedicinalProductPharmaceuticalCharacteristicsSchema = MedicinalProductPharmaceuticalCharacteristicsSchema;
