const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicationBatchSchema } = require('./allSchemaHeaders.js');
const { MedicationIngredientSchema } = require('./allSchemaHeaders.js');
const { MedicationStatusSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationSchema } = require('./allSchemaHeaders.js');

MedicationSchema.add(DomainResourceSchema);
MedicationSchema.remove('id');
MedicationSchema.add({
  identifier: [IdentifierSchema],
  code: CodeableConceptSchema,
  status: MedicationStatusSchema,
  manufacturer: ReferenceSchema,
  form: CodeableConceptSchema,
  amount: RatioSchema,
  ingredient: [MedicationIngredientSchema],
  batch: MedicationBatchSchema,
});

module.exports.MedicationSchema = MedicationSchema;
