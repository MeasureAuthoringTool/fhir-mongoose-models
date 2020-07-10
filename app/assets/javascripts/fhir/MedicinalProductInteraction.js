const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { MedicinalProductInteractionInteractantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductInteractionSchema } = require('./allSchemaHeaders.js');

MedicinalProductInteractionSchema.add(DomainResourceSchema);
MedicinalProductInteractionSchema.remove('id');
MedicinalProductInteractionSchema.add({
  subject: [ReferenceSchema],
  description: PrimitiveStringSchema,
  interactant: [MedicinalProductInteractionInteractantSchema],
  type: CodeableConceptSchema,
  effect: CodeableConceptSchema,
  incidence: CodeableConceptSchema,
  management: CodeableConceptSchema,
});

module.exports.MedicinalProductInteractionSchema = MedicinalProductInteractionSchema;
