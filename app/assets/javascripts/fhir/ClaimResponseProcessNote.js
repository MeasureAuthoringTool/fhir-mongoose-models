const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { NoteTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ClaimResponseProcessNoteSchema } = require('./allSchemaHeaders.js');

ClaimResponseProcessNoteSchema.add(BackboneElementSchema);
ClaimResponseProcessNoteSchema.remove('id');
ClaimResponseProcessNoteSchema.add({
  number: PrimitivePositiveIntSchema,
  type: NoteTypeSchema,
  text: PrimitiveStringSchema,
  language: CodeableConceptSchema,
});

module.exports.ClaimResponseProcessNoteSchema = ClaimResponseProcessNoteSchema;
