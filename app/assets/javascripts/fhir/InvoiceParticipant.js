const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { InvoiceParticipantSchema } = require('./allSchemaHeaders.js');

InvoiceParticipantSchema.add(BackboneElementSchema);
InvoiceParticipantSchema.remove('id');
InvoiceParticipantSchema.add({
  role: CodeableConceptSchema,
  actor: ReferenceSchema,
});

module.exports.InvoiceParticipantSchema = InvoiceParticipantSchema;
