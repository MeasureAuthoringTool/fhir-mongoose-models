const { BackboneElementSchema } = require('./BackboneElement');
const { NoteTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PaymentReconciliationProcessNoteSchema } = require('./allSchemaHeaders.js');

PaymentReconciliationProcessNoteSchema.add(BackboneElementSchema);
PaymentReconciliationProcessNoteSchema.remove('id');
PaymentReconciliationProcessNoteSchema.add({
  type: NoteTypeSchema,
  text: PrimitiveStringSchema,
});

module.exports.PaymentReconciliationProcessNoteSchema = PaymentReconciliationProcessNoteSchema;
