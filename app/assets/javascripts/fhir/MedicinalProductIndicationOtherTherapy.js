const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIndicationOtherTherapySchema } = require('./allSchemaHeaders.js');

MedicinalProductIndicationOtherTherapySchema.add(BackboneElementSchema);
MedicinalProductIndicationOtherTherapySchema.remove('id');
MedicinalProductIndicationOtherTherapySchema.add({
  therapyRelationshipType: CodeableConceptSchema,
  medicationCodeableConcept: CodeableConceptSchema,
  medicationReference: ReferenceSchema,
});

module.exports.MedicinalProductIndicationOtherTherapySchema = MedicinalProductIndicationOtherTherapySchema;
