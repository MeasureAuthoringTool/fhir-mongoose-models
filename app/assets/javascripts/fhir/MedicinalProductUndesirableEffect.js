const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PopulationSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductUndesirableEffectSchema } = require('./allSchemaHeaders.js');

MedicinalProductUndesirableEffectSchema.add(DomainResourceSchema);
MedicinalProductUndesirableEffectSchema.remove('id');
MedicinalProductUndesirableEffectSchema.add({
  subject: [ReferenceSchema],
  symptomConditionEffect: CodeableConceptSchema,
  classification: CodeableConceptSchema,
  frequencyOfOccurrence: CodeableConceptSchema,
  population: [PopulationSchema],
});

module.exports.MedicinalProductUndesirableEffectSchema = MedicinalProductUndesirableEffectSchema;
