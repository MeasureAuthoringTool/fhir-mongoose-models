const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationDispenseSubstitutionSchema } = require('./allSchemaHeaders.js');

MedicationDispenseSubstitutionSchema.add(BackboneElementSchema);
MedicationDispenseSubstitutionSchema.remove('id');
MedicationDispenseSubstitutionSchema.add({
  wasSubstituted: PrimitiveBooleanSchema,
  type: CodeableConceptSchema,
  reason: [CodeableConceptSchema],
  responsibleParty: [ReferenceSchema],
});

module.exports.MedicationDispenseSubstitutionSchema = MedicationDispenseSubstitutionSchema;
