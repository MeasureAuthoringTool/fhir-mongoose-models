const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CommunicationPayloadSchema } = require('./allSchemaHeaders.js');

CommunicationPayloadSchema.add(BackboneElementSchema);
CommunicationPayloadSchema.remove('id');
CommunicationPayloadSchema.add({
  contentString: PrimitiveStringSchema,
  contentAttachment: AttachmentSchema,
  contentReference: ReferenceSchema,
});

module.exports.CommunicationPayloadSchema = CommunicationPayloadSchema;
