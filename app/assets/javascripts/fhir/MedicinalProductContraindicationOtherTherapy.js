const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductContraindicationOtherTherapySchema } = require('./allSchemaHeaders.js');

MedicinalProductContraindicationOtherTherapySchema.add(BackboneElementSchema);
MedicinalProductContraindicationOtherTherapySchema.remove('id');
MedicinalProductContraindicationOtherTherapySchema.add({
  therapyRelationshipType: CodeableConceptSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
});

module.exports.MedicinalProductContraindicationOtherTherapySchema = MedicinalProductContraindicationOtherTherapySchema;
