const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicationAdministrationPerformerSchema } = require('./allSchemaHeaders.js');

MedicationAdministrationPerformerSchema.add(BackboneElementSchema);
MedicationAdministrationPerformerSchema.remove('id');
MedicationAdministrationPerformerSchema.add({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
});

module.exports.MedicationAdministrationPerformerSchema = MedicationAdministrationPerformerSchema;
