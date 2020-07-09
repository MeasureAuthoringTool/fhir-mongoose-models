const { ElementSchema } = require('./Element');
const { NoteTypeSchema } = require('./allSchemaHeaders.js');

NoteTypeSchema.add(ElementSchema);
NoteTypeSchema.remove('id');
NoteTypeSchema.add({
  value: String,
});

module.exports.NoteTypeSchema = NoteTypeSchema;
