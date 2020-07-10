const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { NoteTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ExplanationOfBenefitProcessNoteSchema } = require('./allSchemaHeaders.js');

ExplanationOfBenefitProcessNoteSchema.add(BackboneElementSchema);
ExplanationOfBenefitProcessNoteSchema.remove('id');
ExplanationOfBenefitProcessNoteSchema.add({
  number: PrimitivePositiveIntSchema,
  type: NoteTypeSchema,
  text: PrimitiveStringSchema,
  language: CodeableConceptSchema,
});

module.exports.ExplanationOfBenefitProcessNoteSchema = ExplanationOfBenefitProcessNoteSchema;
