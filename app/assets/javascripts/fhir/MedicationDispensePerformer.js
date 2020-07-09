const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationDispensePerformerSchema } = require('./allSchemaHeaders.js');

MedicationDispensePerformerSchema.add(BackboneElementSchema);
MedicationDispensePerformerSchema.remove('id');
MedicationDispensePerformerSchema.add({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
});

module.exports.MedicationDispensePerformerSchema = MedicationDispensePerformerSchema;
