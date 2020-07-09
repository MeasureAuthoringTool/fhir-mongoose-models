const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductInteractionInteractantSchema } = require('./allSchemaHeaders.js');

MedicinalProductInteractionInteractantSchema.add(BackboneElementSchema);
MedicinalProductInteractionInteractantSchema.remove('id');
MedicinalProductInteractionInteractantSchema.add({
  itemReference: ReferenceSchema,
  itemCodeableConcept: CodeableConceptSchema,
});

module.exports.MedicinalProductInteractionInteractantSchema = MedicinalProductInteractionInteractantSchema;
