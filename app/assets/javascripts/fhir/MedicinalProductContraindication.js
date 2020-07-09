const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { MedicinalProductContraindicationOtherTherapySchema } = require('./allSchemaHeaders.js');
const { PopulationSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductContraindicationSchema } = require('./allSchemaHeaders.js');

MedicinalProductContraindicationSchema.add(DomainResourceSchema);
MedicinalProductContraindicationSchema.remove('id');
MedicinalProductContraindicationSchema.add({
  subject: [ReferenceSchema],
  disease: CodeableConceptSchema,
  diseaseStatus: CodeableConceptSchema,
  comorbidity: [CodeableConceptSchema],
  therapeuticIndication: [ReferenceSchema],
  otherTherapy: [MedicinalProductContraindicationOtherTherapySchema],
  population: [PopulationSchema],
});

module.exports.MedicinalProductContraindicationSchema = MedicinalProductContraindicationSchema;
