const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { DocumentReferenceContentSchema } = require('./allSchemaHeaders.js');

DocumentReferenceContentSchema.add(BackboneElementSchema);
DocumentReferenceContentSchema.remove('id');
DocumentReferenceContentSchema.add({
  attachment: AttachmentSchema,
  format: CodingSchema,
});

module.exports.DocumentReferenceContentSchema = DocumentReferenceContentSchema;
