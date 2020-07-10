const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { MedicationAdministrationDosageSchema } = require('./allSchemaHeaders.js');

MedicationAdministrationDosageSchema.add(BackboneElementSchema);
MedicationAdministrationDosageSchema.remove('id');
MedicationAdministrationDosageSchema.add({
  text: PrimitiveStringSchema,
  site: CodeableConceptSchema,
  route: CodeableConceptSchema,
  method: CodeableConceptSchema,
  dose: SimpleQuantitySchema,
  rateRatio: RatioSchema,
  rateSimpleQuantity: SimpleQuantitySchema,
});

module.exports.MedicationAdministrationDosageSchema = MedicationAdministrationDosageSchema;
