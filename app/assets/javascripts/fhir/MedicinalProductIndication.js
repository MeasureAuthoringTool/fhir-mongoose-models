const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { MedicinalProductIndicationOtherTherapySchema } = require('./allSchemaHeaders.js');
const { PopulationSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIndicationSchema } = require('./allSchemaHeaders.js');

MedicinalProductIndicationSchema.add(DomainResourceSchema);
MedicinalProductIndicationSchema.remove('id');
MedicinalProductIndicationSchema.add({
  subject: [ReferenceSchema],
  diseaseSymptomProcedure: CodeableConceptSchema,
  diseaseStatus: CodeableConceptSchema,
  comorbidity: [CodeableConceptSchema],
  intendedEffect: CodeableConceptSchema,
  duration: QuantitySchema,
  otherTherapy: [MedicinalProductIndicationOtherTherapySchema],
  undesirableEffect: [ReferenceSchema],
  population: [PopulationSchema],
});

module.exports.MedicinalProductIndicationSchema = MedicinalProductIndicationSchema;
